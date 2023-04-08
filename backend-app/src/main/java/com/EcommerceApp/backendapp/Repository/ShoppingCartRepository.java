package com.EcommerceApp.backendapp.Repository;

import com.EcommerceApp.backendapp.Entity.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@EnableJpaRepositories
@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {


    Optional<ShoppingCart> findByUserId(int userId);
}