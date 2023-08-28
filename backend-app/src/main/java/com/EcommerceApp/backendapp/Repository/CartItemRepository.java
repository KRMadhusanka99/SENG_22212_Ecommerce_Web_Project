package com.EcommerceApp.backendapp.Repository;

import com.EcommerceApp.backendapp.Entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}

