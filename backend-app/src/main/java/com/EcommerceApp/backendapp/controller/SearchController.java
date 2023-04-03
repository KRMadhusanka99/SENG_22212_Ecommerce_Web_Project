package com.EcommerceApp.backendapp.controller;

import com.EcommerceApp.backendapp.Entity.Product;
import com.EcommerceApp.backendapp.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
@Controller
@RequestMapping("/search")
public class SearchController {
    @Autowired
    private ProductService productService;

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String name) {
        List<Product> productList = null;
        try {
            productList = productService.searchProductsByName(name);
        } catch (RuntimeException e) {

        }
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @GetMapping("/search_by_category")
    public ResponseEntity<List<Product>> searchProductsByCategory(@RequestParam long id) {
        List<Product> productList = null;

        productList = productService.searchProductsByCategory(id);

        return new ResponseEntity<>(productList, HttpStatus.OK);
    }
}
