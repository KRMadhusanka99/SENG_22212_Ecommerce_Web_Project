package com.EcommerceApp.backendapp.Service;

import com.EcommerceApp.backendapp.Entity.Order;
import com.EcommerceApp.backendapp.Entity.ShoppingCart;
import com.EcommerceApp.backendapp.Entity.User;

import java.util.List;

public interface OrderService {
    Order placeOrder(User user, ShoppingCart cart, String address);
    List<Order> getAllOrders();
    void deleteOrderById(Long id);
}
