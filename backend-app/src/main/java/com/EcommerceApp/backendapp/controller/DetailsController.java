package com.EcommerceApp.backendapp.controller;

import com.EcommerceApp.backendapp.Service.ProductService;
import com.EcommerceApp.backendapp.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class DetailsController {
    @Autowired
    private ProductService productService;

    //show detailed page on selected product
    @GetMapping("/detail/{id}")
    public String showIndex(@PathVariable("id") Long id, Model model) {
        Product produt = productService.getProductById(id);
        model.addAttribute("product", produt);
        return "details";
    }
}
