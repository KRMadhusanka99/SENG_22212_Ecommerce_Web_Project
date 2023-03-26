package com.EcommerceApp.backendapp.service;

import com.EcommerceApp.backendapp.DTO.AdminRegDTO;
import com.EcommerceApp.backendapp.DTO.UserRegDTO;

public interface AdminService {
    String adminReq(AdminRegDTO adminRegDTO);
}
