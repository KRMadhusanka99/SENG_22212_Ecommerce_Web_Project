package com.EcommerceApp.backendapp.service.impl;

import com.EcommerceApp.backendapp.DTO.AdminRegDTO;
import com.EcommerceApp.backendapp.entity.Admin;
import com.EcommerceApp.backendapp.repo.AdminRepo;
import com.EcommerceApp.backendapp.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceIMPL implements AdminService {

    @Autowired
    private AdminRepo adminRepo;
    @Override
    public String adminReq(AdminRegDTO adminRegDTO) {
        if(!adminRepo.existsAdminByAdminEmail(adminRegDTO.getAdminEmail())){
            // DTO --> Entity
            Admin admin =new Admin(
                    adminRegDTO.getAdminName(),
                    adminRegDTO.getAdminEmail()
            );
            adminRepo.save(admin);
            return "Admin saved";
        }else {
            return "Admin Already in database";
        }
    }


}
