package com.EcommerceApp.backendapp.Service.Implementation;

import com.EcommerceApp.backendapp.Entity.ShoppingCart;
import com.EcommerceApp.backendapp.Entity.CartItem;
import com.EcommerceApp.backendapp.Entity.Product;
import com.EcommerceApp.backendapp.Entity.User;
import com.EcommerceApp.backendapp.Repository.CartItemRepository;
import com.EcommerceApp.backendapp.Repository.ShoppingCartRepository;
import com.EcommerceApp.backendapp.Repository.ProductRepository;
import com.EcommerceApp.backendapp.Repository.UserRepository;
import com.EcommerceApp.backendapp.Service.ShoppingCartService;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {
    @Autowired
    private final ShoppingCartRepository shoppingCartRepository;
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private EntityManager entityManager;

    public ShoppingCartServiceImpl(ShoppingCartRepository shoppingCartRepository, UserRepository userRepository) {
        this.shoppingCartRepository = shoppingCartRepository;
        this.userRepository = userRepository;
    }

    public ShoppingCart createCart(Integer userId) {
        Optional<User> existingUser = userRepository.findById(userId);
        ShoppingCart shoppingCart = new ShoppingCart();
        shoppingCart.setUser(existingUser.orElseThrow(() -> new RuntimeException("User not found")));
        return shoppingCartRepository.save(shoppingCart);
    }

    public ShoppingCart getCartById(Long cartId) {
        return shoppingCartRepository.findById(cartId).orElseThrow(() -> new RuntimeException("Cart not found"));
    }

    public List<CartItem> getCartItems(ShoppingCart shoppingCart) {
        return shoppingCart.getItems();
    }

    public String addCartItem(long cartId, Long productId, int quantity) {
        Optional<ShoppingCart> optionalCart = shoppingCartRepository.findById(cartId);
        Optional<Product> optionalProduct = productRepository.findById(productId);

        if (optionalCart.isPresent() && optionalProduct.isPresent()) {
            ShoppingCart shoppingCart = optionalCart.get();
            List<CartItem> cartItems = shoppingCart.getItems();

            Optional<CartItem> optionalCartItem = cartItems.stream()
                    .filter(item -> item.getProduct().getId().equals(productId))
                    .findFirst();

            if (optionalCartItem.isPresent()) {
                CartItem cartItem = optionalCartItem.get();
                cartItem.setQuantity(cartItem.getQuantity() + quantity);
                shoppingCartRepository.save(shoppingCart);
                return "Quantity updated on item";
            } else {
                CartItem newCartItem = new CartItem();
                newCartItem.setProduct(optionalProduct.get());
                newCartItem.setQuantity(quantity);
                newCartItem.setCart(shoppingCart);
                cartItems.add(newCartItem);
                shoppingCartRepository.save(shoppingCart);
                return "Item added to cart";
            }
        } else {
            throw new RuntimeException("Invalid Product or Cart ID");
        }
    }

    public void deleteCartItem(Long cartId, Long cartItemId) {
        try {
            Optional<ShoppingCart> savedCart = shoppingCartRepository.findById(cartId);
            Optional<CartItem> savedCartItem = cartItemRepository.findById(cartItemId);
            if (savedCart.isPresent() && savedCartItem.isPresent()) {
                List<CartItem> cartItems = savedCart.get().getItems();
                cartItems.remove(savedCartItem.get());
                shoppingCartRepository.save(savedCart.get());
            }
        } catch (Exception exception) {

            throw new RuntimeException("Cart or cartItem not found");
        }
    }
    @Transactional
    public void clearCart(Long cartId) {
        Optional<ShoppingCart> optionalCart = shoppingCartRepository.findById(cartId);
        if (optionalCart.isPresent()) {
            ShoppingCart shoppingCart = optionalCart.get();
            List<CartItem> cartItems = shoppingCart.getItems();
            cartItems.clear();
            entityManager.detach(shoppingCart);
            shoppingCartRepository.save(shoppingCart);
        }
    }

    public ShoppingCart getCart(int userId) {
        return shoppingCartRepository.findByUserId(userId)
                .orElseGet(() -> createCart(userId));
    }

}
