package com.EcommerceApp.backendapp.Service;

import com.EcommerceApp.backendapp.entity.ShoppingCart;

public interface OrderService {
    void saveOrder(ShoppingCart cart);

    void acceptOrder(Long id);

    void cancelOrder(Long id);
}
