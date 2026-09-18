package com.workintech.ecommercebackend.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {

    private Integer address_id;

    private LocalDateTime order_date;

    private String card_no;

    private String card_name;

    private String card_expire_month;

    private String card_expire_year;

    private String card_ccv;

    private BigDecimal price;

    private List<OrderItemRequest> products;
}
