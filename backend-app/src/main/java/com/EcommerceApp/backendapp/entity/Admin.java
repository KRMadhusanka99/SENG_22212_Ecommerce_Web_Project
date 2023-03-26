package com.EcommerceApp.backendapp.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "admin")
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "admin_id", length = 40)
    private int adminId;

    @Column(name = "admin_name", length = 100, nullable = false)
    private String adminName;

    @Column(name = "admin_email", length = 100, unique = true)
    private String adminEmail;

    public Admin(String adminName, String adminEmail) {
        this.adminName = adminName;
        this.adminEmail = adminEmail;
    }

    public Admin() {
    }

    public Admin(int adminId, String adminName, String adminEmail) {
        this.adminId = adminId;
        this.adminName = adminName;
        this.adminEmail = adminEmail;
    }

    public int getAdminId() {
        return adminId;
    }

    public void setAdminId(int adminId) {
        this.adminId = adminId;
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public String getAdminEmail() {
        return adminEmail;
    }

    public void setAdminEmail(String adminEmail) {
        this.adminEmail = adminEmail;
    }
}
