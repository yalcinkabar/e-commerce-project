package com.workintech.ecommercebackend.repository;

import com.workintech.ecommercebackend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ProductRepository
        extends JpaRepository<Product, Integer>,
        JpaSpecificationExecutor<Product> {
}