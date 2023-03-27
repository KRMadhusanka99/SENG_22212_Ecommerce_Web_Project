package com.EcommerceApp.backendapp.controller;

import com.EcommerceApp.backendapp.Service.ProductService;
import com.EcommerceApp.backendapp.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class IndexController {

    @Autowired
    private ProductService productService;

    //Show all products on index page
    @GetMapping("/")
    public String showIndex(Model model) {
        model.addAttribute("products", productService.getAllProduct());
        return "index";
    }


}