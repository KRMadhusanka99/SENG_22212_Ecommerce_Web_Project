package com.EcommerceApp.backendapp.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {
    @GetMapping("/secured")
    public String secured(Authentication authentication){
        return authentication.getName(); //returns the user name(email)
        //return authentication.getPrincipal();//change return type to "Object"
    }

    @GetMapping("/secured-admin")
    @PreAuthorize("hasRole('ROLE_admin)")
    public String securedAdmin(){
        return "Only open for admin";

    }
    @GetMapping("/public")
    public String pub(){
        return "this is open for public";
    }
}


