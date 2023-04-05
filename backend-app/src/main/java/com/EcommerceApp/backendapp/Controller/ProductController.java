package com.EcommerceApp.backendapp.Controller;

import com.EcommerceApp.backendapp.Entity.Product;
import com.EcommerceApp.backendapp.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/view")//list products
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/getProduct")//view product in detail
    public ResponseEntity<Product> getProductById(@RequestParam Long id) {
        Product product = productService.getProductById(id);
        if (product == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(product);
    }

    @PostMapping("/addProduct")//add products
    public ResponseEntity<Product> addProduct(@RequestBody Product product , @RequestParam Long category_id) {
        productService.addProduct(product,category_id);
        return ResponseEntity.status(HttpStatus.CREATED).body(product);
    }


    @DeleteMapping("/deleteProduct")//delete product by id
    public ResponseEntity<Void> deleteProduct(@RequestParam Long id) {
        boolean deleted = productService.deleteProductById(id);
        if (!deleted) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/updateProduct")//update product details by product id
    public ResponseEntity<Product> updateProduct(@RequestParam Long product_id, @RequestBody Product product){
        Product updatedProduct = productService.updateProduct(product_id,product);
        return new ResponseEntity<Product>(updatedProduct,HttpStatus.ACCEPTED);
    }


}
