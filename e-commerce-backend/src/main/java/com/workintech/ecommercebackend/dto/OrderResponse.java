package com.workintech.ecommercebackend.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public class OrderResponse {

    private Integer id;
    private LocalDateTime order_date;
    private BigDecimal price;
    private List<OrderProductDTO> products;

    public OrderResponse(
            Integer id,
            LocalDateTime order_date,
            BigDecimal price,
            List<OrderProductDTO> products
    ) {
        this.id = id;
        this.order_date = order_date;
        this.price = price;
        this.products = products;
    }

    public Integer getId() {
        return id;
    }

    public LocalDateTime getOrder_date() {
        return order_date;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public List<OrderProductDTO> getProducts() {
        return products;
    }
}