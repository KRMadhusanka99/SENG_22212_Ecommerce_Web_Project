package com.EcommerceApp.backendapp.entity;

import jakarta.persistence.*;

@Entity
@Table(name="user")
public class User {
    @Id
    @Column(name = "userId", length = 10)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userId;

    @Column(name = "userName", length = 100, nullable = false)
    private String userName;

    @Column(name = "email", length = 50, nullable = false, unique = true)
    private String email;

    public User(int userId, String userName, String email) {
        this.userId = userId;
        this.userName = userName;
        this.email = email;
    }

    public User() {
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
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
        return "User{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

    public User(String userName, String email) {
        this.userName = userName;
        this.email = email;
    }
}
