package com.workintech.ecommercebackend.service;

import com.workintech.ecommercebackend.dto.LoginRequest;
import com.workintech.ecommercebackend.dto.LoginResponse;
import com.workintech.ecommercebackend.dto.RegisterRequest;
import com.workintech.ecommercebackend.entity.User;
import com.workintech.ecommercebackend.repository.UserRepository;
import com.workintech.ecommercebackend.security.JwtService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public AuthService(
            UserRepository userRepository,
            JwtService jwtService,
            PasswordEncoder passwordEncoder
    ) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
    }

    public User register(RegisterRequest request) {

        // Aynı email daha önce kullanılmış mı?
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException(
                    "Bu email adresi zaten kayıtlı."
            );
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        // Şifreyi database'e düz metin olarak kaydetmiyoruz
        user.setPassword(
                passwordEncoder.encode(request.getPassword())
        );

        // Frontend role_id gönderiyor
        if (request.getRole_id() != null
                && request.getRole_id() == 2) {

            user.setRole("store");

        } else {

            // Varsayılan rol customer
            user.setRole("customer");
        }

        return userRepository.save(user);
    }

    public LoginResponse login(LoginRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Email veya şifre hatalı."
                        )
                );

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        )) {
            throw new RuntimeException(
                    "Email veya şifre hatalı."
            );
        }

        String token = jwtService.generateToken(
                user.getId(),
                user.getEmail(),
                user.getRole()
        );

        return new LoginResponse(
                token,
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole()
        );
    }
    public LoginResponse verify(String email) {

        User user = userRepository
                .findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Kullanıcı bulunamadı."
                        )
                );

        String token = jwtService.generateToken(
                user.getId(),
                user.getEmail(),
                user.getRole()
        );

        return new LoginResponse(
                token,
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole()
        );
    }

}