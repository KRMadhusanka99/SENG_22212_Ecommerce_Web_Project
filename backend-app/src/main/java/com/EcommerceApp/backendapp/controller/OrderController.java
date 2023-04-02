package com.EcommerceApp.backendapp.controller;

import com.EcommerceApp.backendapp.DTO.UserRepository;
import com.EcommerceApp.backendapp.Service.OrderService;
import com.EcommerceApp.backendapp.entity.Order;
import com.EcommerceApp.backendapp.entity.ShoppingCart;
import com.EcommerceApp.backendapp.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.security.Principal;
import java.util.List;

public class OrderController {//todo implement methods to get user info to confirm order
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderService orderService;

    @GetMapping("/check-out")
    public String checkout(Model model, Principal principal){
        if(principal == null){
            return "redirect:/login";//login page
        }
        String userName = SecurityContextHolder.getContext().getAuthentication().getName();
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String username = authentication.getPrincipal().toString();
//        User user = authentication.getDetails();

//        String username = principal.getName();
//        User user = userRepository.findByEmail(username);

//
//        var user = userRepository.findByEmail(AuthenticationRequest request.getEmail())
//                .orElseThrow();

//        if(customer.getPhoneNumber().trim().isEmpty() || customer.getAddress().trim().isEmpty()
//                || customer.getCity().trim().isEmpty() || customer.getCountry().trim().isEmpty()){
//
//            model.addAttribute("customer", customer);
//            model.addAttribute("error", "You must fill the information after checkout!");
//            return "account";
//        }else{
            User user = userRepository.findById(userName);
            model.addAttribute("customer", user);
            ShoppingCart cart = user.getShoppingCart();
            model.addAttribute("cart", cart);
//        }
        return "checkout";
    }


    @GetMapping("/order")
    public String order(Principal principal,Model model){
        if(principal==null){
            return "redirect:/login";
        }
        String username = principal.getName();
        User user = userRepository.findById(username);
        List<Order> orderList= user.getOrders();
        model.addAttribute("orders",orderList);
        return "order";
    }

    @GetMapping("/save_order")
    public String saveOrder(Principal principal){
        if(principal==null){
            return "redirect:/login";
        }
        String username = principal.getName();
        User user = userRepository.findById(username);
        ShoppingCart cart = user.getShoppingCart();
        orderService.saveOrder(cart);
        return "redirect:/order";

    }

}
