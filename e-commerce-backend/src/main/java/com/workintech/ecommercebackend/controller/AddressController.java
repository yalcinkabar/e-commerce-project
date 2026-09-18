package com.workintech.ecommercebackend.controller;

import com.workintech.ecommercebackend.entity.Address;
import com.workintech.ecommercebackend.entity.User;
import com.workintech.ecommercebackend.service.AddressService;
import com.workintech.ecommercebackend.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/address")
@CrossOrigin(origins = "*")
public class AddressController {

    private final AddressService addressService;
    private final UserRepository userRepository;

    public AddressController(
            AddressService addressService,
            UserRepository userRepository
    ) {
        this.addressService = addressService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<Address> getAddresses(
            Authentication authentication
    ) {
        User user = getUser(authentication);

        return addressService.getUserAddresses(user);
    }

    @PostMapping
    public Address addAddress(
            @RequestBody Address address,
            Authentication authentication
    ) {
        User user = getUser(authentication);

        return addressService.addAddress(
                address,
                user
        );
    }

    @PutMapping
    public Address updateAddress(
            @RequestBody Address address,
            Authentication authentication
    ) {
        User user = getUser(authentication);

        return addressService.updateAddress(
                address,
                user
        );
    }

    @DeleteMapping("/{id}")
    public void deleteAddress(
            @PathVariable Integer id,
            Authentication authentication
    ) {
        User user = getUser(authentication);

        addressService.deleteAddress(
                id,
                user
        );
    }

    private User getUser(
            Authentication authentication
    ) {
        String email = authentication.getName();

        return userRepository
                .findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Kullanıcı bulunamadı."
                        )
                );
    }
}
