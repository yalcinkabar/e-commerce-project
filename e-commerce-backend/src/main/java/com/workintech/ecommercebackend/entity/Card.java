package com.workintech.ecommercebackend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "cards", schema = "fsweb2")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String card_no;

    private String expire_month;

    private String expire_year;

    private String name_on_card;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
