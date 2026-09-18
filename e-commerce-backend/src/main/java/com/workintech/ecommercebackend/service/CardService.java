package com.workintech.ecommercebackend.service;

import com.workintech.ecommercebackend.entity.Card;
import com.workintech.ecommercebackend.entity.User;
import com.workintech.ecommercebackend.repository.CardRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardService {

    private final CardRepository cardRepository;

    public CardService(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    public List<Card> getUserCards(User user) {
        return cardRepository.findByUser(user);
    }

    public Card addCard(Card card, User user) {
        card.setId(null);
        card.setUser(user);

        return cardRepository.save(card);
    }

    public Card updateCard(
            Card card,
            User user
    ) {
        Card existingCard =
                cardRepository.findById(card.getId())
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Kart bulunamadı."
                                )
                        );

        if (!existingCard.getUser().getId()
                .equals(user.getId())) {

            throw new RuntimeException(
                    "Bu kart size ait değil."
            );
        }

        existingCard.setCard_no(card.getCard_no());
        existingCard.setExpire_month(
                card.getExpire_month()
        );
        existingCard.setExpire_year(
                card.getExpire_year()
        );
        existingCard.setName_on_card(
                card.getName_on_card()
        );

        return cardRepository.save(existingCard);
    }

    public void deleteCard(
            Integer cardId,
            User user
    ) {
        Card card =
                cardRepository.findById(cardId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Kart bulunamadı."
                                )
                        );

        if (!card.getUser().getId()
                .equals(user.getId())) {

            throw new RuntimeException(
                    "Bu kart size ait değil."
            );
        }

        cardRepository.delete(card);
    }
}
