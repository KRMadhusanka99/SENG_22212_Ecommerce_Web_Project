package com.EcommerceApp.backendapp.DTO;

public class UserRegDTO {
    private String userName;
    private String email;

    public UserRegDTO(String userName, String email) {
        this.userName = userName;
        this.email = email;
    }

    public UserRegDTO() {
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "UserRegDTO{" +
                "userName='" + userName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
