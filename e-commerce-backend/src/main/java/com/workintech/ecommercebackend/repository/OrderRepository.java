package com.workintech.ecommercebackend.repository;

import com.workintech.ecommercebackend.entity.Order;
import com.workintech.ecommercebackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository
        extends JpaRepository<Order, Integer> {

    List<Order> findByUserOrderByOrderDateDesc(User user);
}