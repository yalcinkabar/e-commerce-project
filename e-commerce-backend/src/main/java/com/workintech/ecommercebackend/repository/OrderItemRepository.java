package com.workintech.ecommercebackend.repository;

import com.workintech.ecommercebackend.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository
        extends JpaRepository<OrderItem, Integer> {
}
