package com.workintech.ecommercebackend.repository;

import com.workintech.ecommercebackend.entity.Card;
import com.workintech.ecommercebackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CardRepository
        extends JpaRepository<Card, Integer> {

    List<Card> findByUser(User user);
}
