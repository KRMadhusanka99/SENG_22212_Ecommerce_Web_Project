package com.EcommerceApp.backendapp.service.impl;

import com.EcommerceApp.backendapp.DTO.UserRegDTO;
import com.EcommerceApp.backendapp.entity.User;
import com.EcommerceApp.backendapp.repo.UserRepo;
import com.EcommerceApp.backendapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceIMPL implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public String userReq(UserRegDTO userRegDTO) {
        if(!userRepo.existsByEmail(userRegDTO.getEmail())){
            // DTO --> Entity
            User user =new User(
                    userRegDTO.getUserName(),
                    userRegDTO.getEmail()
            );
            userRepo.save(user);
            return "User saved";
        }else {
            return  "User Already in database";
        }
    }
}
