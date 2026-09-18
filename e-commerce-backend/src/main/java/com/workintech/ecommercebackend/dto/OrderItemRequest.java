package com.workintech.ecommercebackend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemRequest {

    private Integer product_id;

    private Integer count;

    private String detail;
}
