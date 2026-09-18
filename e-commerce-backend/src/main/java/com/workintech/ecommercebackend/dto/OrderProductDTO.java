package com.workintech.ecommercebackend.dto;

import java.math.BigDecimal;
import java.util.List;

public class OrderProductDTO {

    private Integer id;
    private String name;
    private BigDecimal price;
    private Integer count;
    private List<ProductImageDTO> images;

    public OrderProductDTO(
            Integer id,
            String name,
            BigDecimal price,
            Integer count,
            List<ProductImageDTO> images
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = count;
        this.images = images;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public Integer getCount() {
        return count;
    }

    public List<ProductImageDTO> getImages() {
        return images;
    }
}
