package com.EcommerceApp.backendapp.Service;

import com.EcommerceApp.backendapp.Entity.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    Product getProductById(Long id);
    Product addProduct(Product product, Long categoryId);
    boolean deleteProductById(Long id);
    List<Product> searchProductsByName(String query);
    List<Product> viewByCategory(Long categoryId);
    Product updateProduct(Long id, Product new_product);
}
