package com.workintech.ecommercebackend.controller;

import com.workintech.ecommercebackend.entity.Card;
import com.workintech.ecommercebackend.entity.User;
import com.workintech.ecommercebackend.repository.UserRepository;
import com.workintech.ecommercebackend.service.CardService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/card")
@CrossOrigin(origins = "*")
public class CardController {

    private final CardService cardService;
    private final UserRepository userRepository;

    public CardController(
            CardService cardService,
            UserRepository userRepository
    ) {
        this.cardService = cardService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<Card> getCards(
            Authentication authentication
    ) {
        User user = getUser(authentication);

        return cardService.getUserCards(user);
    }

    @PostMapping
    public Card addCard(
            @RequestBody Card card,
            Authentication authentication
    ) {
        User user = getUser(authentication);

        return cardService.addCard(card, user);
    }

    @PutMapping
    public Card updateCard(
            @RequestBody Card card,
            Authentication authentication
    ) {
        User user = getUser(authentication);

        return cardService.updateCard(card, user);
    }

    @DeleteMapping("/{id}")
    public void deleteCard(
            @PathVariable Integer id,
            Authentication authentication
    ) {
        User user = getUser(authentication);

        cardService.deleteCard(id, user);
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
