package com.workintech.ecommercebackend.repository;

import com.workintech.ecommercebackend.entity.Address;
import com.workintech.ecommercebackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AddressRepository
        extends JpaRepository<Address, Integer> {

    List<Address> findByUser(User user);
}