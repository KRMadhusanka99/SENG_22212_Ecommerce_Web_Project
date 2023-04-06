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

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    @ResponseBody
    public ModelAndView search(@RequestParam("value") String value) {
        ModelAndView modelAndView = new ModelAndView();;
        modelAndView.setViewName("fragments/searchFragment");// todo change name of the search file
        List<Product> products = productService.searchProductByNameLike(value);
        modelAndView.addObject("products", products);
        return modelAndView;
    }

}