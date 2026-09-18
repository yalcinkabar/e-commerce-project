package com.workintech.ecommercebackend.controller;

import com.workintech.ecommercebackend.dto.LoginRequest;
import com.workintech.ecommercebackend.dto.LoginResponse;
import com.workintech.ecommercebackend.dto.RegisterRequest;
import com.workintech.ecommercebackend.entity.User;
import com.workintech.ecommercebackend.service.AuthService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public LoginResponse login(
            @RequestBody LoginRequest request
    ) {
        return authService.login(request);
    }

    @PostMapping("/signup")
    public User signup(
            @RequestBody RegisterRequest request
    ) {
        return authService.register(request);
    }
    @GetMapping("/verify")
    public LoginResponse verify(
            Authentication authentication
    ) {
        String email = authentication.getName();

        return authService.verify(email);
    }
}