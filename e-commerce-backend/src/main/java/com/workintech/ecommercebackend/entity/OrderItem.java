package com.workintech.ecommercebackend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "order_items", schema = "fsweb2")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private Integer count;

    private String detail;
}
