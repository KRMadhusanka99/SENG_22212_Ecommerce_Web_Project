package com.EcommerceApp.backendapp.Controller;

import com.EcommerceApp.backendapp.Entity.ShoppingCart;
import com.EcommerceApp.backendapp.Entity.CartItem;
import com.EcommerceApp.backendapp.Service.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/cart")
@CrossOrigin
public class CartController {
    @Autowired
    private final ShoppingCartService shoppingCartService;

    public CartController(ShoppingCartService shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }

    @PostMapping("/create")
    public ResponseEntity<ShoppingCart> createCart(@RequestParam Integer user_id) {
        ShoppingCart shoppingCart = shoppingCartService.createCart(user_id);
        return ResponseEntity.ok(shoppingCart);
    }

    @GetMapping("/get")
    public ResponseEntity<ShoppingCart> getCartById(@RequestParam Long id) {
        ShoppingCart shoppingCart = shoppingCartService.getCartById(id);
        if (shoppingCart == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(shoppingCart);
    }

    @GetMapping("/get/items")
    public ResponseEntity<List<CartItem>> getCartItems(@RequestParam Long cartId) {
        ShoppingCart shoppingCart = shoppingCartService.getCartById(cartId);
        if (shoppingCart == null) {
            return ResponseEntity.notFound().build();
        }
        List<CartItem> cartItems = shoppingCartService.getCartItems(shoppingCart);
        return ResponseEntity.ok(cartItems);
    }

    @PostMapping("/add/items")
    public ResponseEntity<String> addCartItem(@RequestParam Long cartId, @RequestParam Long productId, @RequestParam int quantity) {
        shoppingCartService.addCartItem(cartId,productId, quantity);
        return ResponseEntity.ok("Item added to cart");
    }

    @DeleteMapping("/delete/items")
    public ResponseEntity<?> deleteCartItem(@RequestParam Long cartId, @RequestParam Long itemId) {
        shoppingCartService.deleteCartItem(cartId,itemId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/clear")
    public ResponseEntity<?> clearCart(@RequestParam Long id) {
        ShoppingCart shoppingCart = shoppingCartService.getCartById(id);
        if (shoppingCart == null) {
            return ResponseEntity.notFound().build();
        }
        shoppingCartService.clearCart(id);
        return ResponseEntity.ok().build();
    }
}
