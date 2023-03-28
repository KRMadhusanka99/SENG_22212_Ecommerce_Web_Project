package com.EcommerceApp.backendapp.DTO;

import com.EcommerceApp.backendapp.entity.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {
    ShoppingCart findBySessionToken(String sessionToken);
}
