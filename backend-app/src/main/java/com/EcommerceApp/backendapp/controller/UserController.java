package com.EcommerceApp.backendapp.controller;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/customer")
public class UserController {
    @PutMapping(path = "/reg-user")
    public String reqUser(@P){
        return "";
    }
}
