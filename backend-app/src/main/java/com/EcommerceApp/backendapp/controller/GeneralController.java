package com.EcommerceApp.backendapp.controller;

import com.EcommerceApp.backendapp.Service.ProductService;
import com.EcommerceApp.backendapp.Service.ShoppingCartService;
import com.EcommerceApp.backendapp.entity.ShoppingCart;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

@ControllerAdvice
public class GeneralController {
    @Autowired
    private ShoppingCartService shoppingCartService;
    @Autowired
    private ProductService productService;

    @ModelAttribute
    public void populateModel(Model model, HttpServletRequest request) {
        String sessionToken = (String) request.getSession(true).getAttribute("sessiontToken");
        String sessionTokenwishList = (String) request.getSession(true).getAttribute("sessiontTokenWishList");
        //In order to remain the number of cart items same in each page
        if (sessionToken == null) {
            model.addAttribute("shoppingCart", new ShoppingCart());

        } else {
            model.addAttribute("shoppingCart", shoppingCartService.getShoppingCartBySessionTokent(sessionToken));
        }
        //Display all categories in each page generally
        model.addAttribute("categories",productService.getAllCategories());

    }
}
