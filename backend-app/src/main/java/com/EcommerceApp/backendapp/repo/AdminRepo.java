package com.EcommerceApp.backendapp.repo;

import com.EcommerceApp.backendapp.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepo extends JpaRepository<Admin,Integer> {
    boolean existsAdminByAdminEmail(String adminEmail);

}
