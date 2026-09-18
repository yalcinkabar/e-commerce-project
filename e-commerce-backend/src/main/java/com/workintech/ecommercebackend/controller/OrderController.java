package com.workintech.ecommercebackend.controller;

import com.workintech.ecommercebackend.dto.OrderRequest;
import com.workintech.ecommercebackend.entity.Order;
import com.workintech.ecommercebackend.entity.User;
import com.workintech.ecommercebackend.repository.UserRepository;
import com.workintech.ecommercebackend.service.OrderService;
import org.springframework.security.core.Authentication;
import com.workintech.ecommercebackend.dto.OrderResponse;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "*")
public class OrderController {

    private final OrderService orderService;
    private final UserRepository userRepository;

    public OrderController(
            OrderService orderService,
            UserRepository userRepository
    ) {
        this.orderService = orderService;
        this.userRepository = userRepository;
    }

    @PostMapping
    public Order createOrder(
            @RequestBody OrderRequest request,
            Authentication authentication
    ) {
        User user = getUser(authentication);

        return orderService.createOrder(
                request,
                user
        );
    }

    @GetMapping
    public List<OrderResponse> getOrders(
            Authentication authentication
    ) {
        User user = getUser(authentication);

        return orderService.getUserOrders(user);
    }

    private User getUser(
            Authentication authentication
    ) {
        String email = authentication.getName();

        return userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Kullanıcı bulunamadı."
                        )
                );
    }
}