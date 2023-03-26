package com.EcommerceApp.backendapp.controller;

import com.EcommerceApp.backendapp.DTO.AdminRegDTO;
import com.EcommerceApp.backendapp.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PutMapping(path = "/reg-admin")
    public String reqAdmin(@RequestBody AdminRegDTO adminRegDTO){
        String msg = adminService.adminReq(adminRegDTO);
        return msg;

    }
}
