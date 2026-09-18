package com.workintech.ecommercebackend.repository;

import com.workintech.ecommercebackend.entity.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductImageRepository
        extends JpaRepository<ProductImage, Integer> {
}
