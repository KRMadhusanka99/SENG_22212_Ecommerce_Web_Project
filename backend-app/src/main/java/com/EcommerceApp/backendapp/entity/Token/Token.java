package com.EcommerceApp.backendapp.Entity.Token;

import com.EcommerceApp.backendapp.Entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data @Builder
@NoArgsConstructor @AllArgsConstructor
@Entity
public class Token {

    @Id
    @GeneratedValue
    public Integer id;

    @Column(unique = true)
    public String token;

    @Enumerated(EnumType.STRING)
    public TokenType tokenType = TokenType.BEARER;

    public boolean revoked;
    public boolean expired;
    public LocalDateTime confirmedAt;
    public LocalDateTime expiredAt;

    @ManyToOne
    @JoinColumn(name = "user_id")
    public User user;
}

