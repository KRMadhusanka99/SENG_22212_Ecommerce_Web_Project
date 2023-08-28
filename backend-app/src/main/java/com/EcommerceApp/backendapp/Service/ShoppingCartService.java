package com.EcommerceApp.backendapp.Service;

import com.EcommerceApp.backendapp.Entity.ShoppingCart;
import com.EcommerceApp.backendapp.Entity.CartItem;

import java.util.List;

public interface ShoppingCartService {
    ShoppingCart createCart(Integer userId);
    ShoppingCart getCartById(Long cartId);
    List<CartItem> getCartItems(ShoppingCart shoppingCart);
    String addCartItem(Long cartId, Long productId, int quantity);
    void deleteCartItem(Long cartId, Long cartItemId);
    void clearCart(Long cartId);
    ShoppingCart getCart(int userId);
}
