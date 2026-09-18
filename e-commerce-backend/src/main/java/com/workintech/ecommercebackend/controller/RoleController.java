package com.workintech.ecommercebackend.controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class RoleController {

    @GetMapping("/roles")
    public List<Map<String, Object>> getRoles() {

        return List.of(
                Map.of(
                        "id", 1,
                        "code", "customer",
                        "name", "Customer"
                ),
                Map.of(
                        "id", 2,
                        "code", "store",
                        "name", "Store"
                )
        );
    }
}
