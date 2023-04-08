package com.EcommerceApp.backendapp.Repository;

import com.EcommerceApp.backendapp.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameContainingIgnoreCase(String query);

    List<Product> findByCategoryId(Long categoryId);
}
