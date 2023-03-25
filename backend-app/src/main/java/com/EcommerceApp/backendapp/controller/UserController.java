package com.EcommerceApp.backendapp.controller;

import com.EcommerceApp.backendapp.DTO.UserRegDTO;
import com.EcommerceApp.backendapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/customer")
public class UserController {
    @Autowired
    private UserService userService;

    @PutMapping(path = "/reg-user")
    public String reqUser(@RequestBody UserRegDTO userRegDTO){
        String mg = userService.userReq(userRegDTO);
        return "";

    }
}
