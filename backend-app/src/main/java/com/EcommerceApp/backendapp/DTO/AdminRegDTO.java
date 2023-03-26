package com.EcommerceApp.backendapp.DTO;

public class AdminRegDTO {
    private String adminName;
    private String adminEmail;

    public AdminRegDTO(String adminName, String adminEmail) {
        this.adminName = adminName;
        this.adminEmail = adminEmail;
    }

    public AdminRegDTO() {
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

    @Override
    public String toString() {
        return "AdminRegDTO{" +
                "adminName='" + adminName + '\'' +
                ", adminEmail='" + adminEmail + '\'' +
                '}';
    }
}
