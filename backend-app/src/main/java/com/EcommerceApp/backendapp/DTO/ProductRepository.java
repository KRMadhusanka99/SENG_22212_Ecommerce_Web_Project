package com.EcommerceApp.backendapp.DTO;

import com.EcommerceApp.backendapp.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // ignore the capital simple case values
    List<Product> findByNameContainingIgnoreCase(String name);

    @Query("SELECT DISTINCT brand FROM Product")
    List<String> findAllBrandsDistincts();
}
