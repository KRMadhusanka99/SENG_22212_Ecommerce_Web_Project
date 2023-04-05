package com.EcommerceApp.backendapp.Controller;

import com.EcommerceApp.backendapp.Entity.User;
import com.EcommerceApp.backendapp.Repository.UserRepository;
import com.EcommerceApp.backendapp.RequestandResponse.Request.AuthenticationRequest;
import com.EcommerceApp.backendapp.RequestandResponse.Request.RegisterRequest;
import com.EcommerceApp.backendapp.RequestandResponse.Request.VerifyRequest;
import com.EcommerceApp.backendapp.RequestandResponse.Response.AuthenticationResponse;
import com.EcommerceApp.backendapp.RequestandResponse.Response.MessageResponse;
import com.EcommerceApp.backendapp.Service.AuthenticationService;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authenticate")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {

    @Autowired
    private final AuthenticationService authenticationService;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())){
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already taken!"));
        }
        return ResponseEntity.ok(authenticationService.register(request));
    }
    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest request) {
        if (!(userRepository.existsByEmail(request.getEmail()))){
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Couldn't find your Innova Account"));
        }
        else {
            User user = userRepository.findByEmail(request.getEmail())
                    .orElseThrow();
            if (user.isVerified() == true) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
            }
            else {
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Account hasn't verified"));
            }
        }
    }

    @GetMapping(path = "/confirm")
    public String confirm(@RequestParam("token") String token) {
        return authenticationService.confirmToken(token);
    }

    @PostMapping("/verify")
    public ResponseEntity<?> reVerifyEmail(@RequestBody VerifyRequest request){
        if (userRepository.existsByEmail(request.getEmail())){
            User userDe = userRepository.findByEmail(request.getEmail())
                    .orElseThrow();
            if (userDe.isVerified()) {
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Your Email has been Already verified")); }
            else
                return ResponseEntity.ok(authenticationService.reVerifyEmail(request));
        }
        else
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Your Email is not Registered."));
    }
}

