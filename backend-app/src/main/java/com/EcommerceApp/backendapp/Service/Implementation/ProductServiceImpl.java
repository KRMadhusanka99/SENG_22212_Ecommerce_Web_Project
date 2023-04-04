package com.EcommerceApp.backendapp.Service.Implementation;

import com.EcommerceApp.backendapp.Entity.Category;
import com.EcommerceApp.backendapp.Entity.Product;
import com.EcommerceApp.backendapp.Repository.CategoryRepository;
import com.EcommerceApp.backendapp.Repository.ProductRepository;
import com.EcommerceApp.backendapp.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();

    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product addProduct(Product product, Long categoryId) {
        Category category = categoryRepository.findById(categoryId).orElse(null);
        if (category == null) {
            throw new IllegalArgumentException("Invalid category id: " + categoryId);
        }
        product.setCategory(category);
        return productRepository.save(product);
    }

    public boolean deleteProductById(Long id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return true;
        }
        return false;
    }


    public Product updateProduct(long id, Product new_product) {
        Product old_product = productRepository.findById(id).orElseThrow(()->new RuntimeException("Product not found."));
        old_product.setName(new_product.getName());
        old_product.setImage(new_product.getImage());
        old_product.setPrice(new_product.getPrice());
        old_product.setDescription(new_product.getDescription());
        old_product.setQuantity(new_product.getQuantity());

        Product updatedProduct = productRepository.save(old_product);

        return updatedProduct;
    }

    public List<Product> searchProductsByName(String query) {
        List<Product> products = productRepository.findByNameContainingIgnoreCase(query);
        if (products.isEmpty()) {
            throw new RuntimeException("Found no products");
        }
        return products;
    }

    public List<Product> searchProductsByCategory(Long categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }
}
