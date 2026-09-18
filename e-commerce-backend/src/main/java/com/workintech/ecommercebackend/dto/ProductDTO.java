package com.workintech.ecommercebackend.dto;

import java.math.BigDecimal;
import java.util.List;

public class ProductDTO {

    private Integer id;
    private String name;
    private String description;
    private BigDecimal price;
    private Integer stock;
    private Integer store_id;
    private Integer category_id;
    private Double rating;
    private Integer sell_count;
    private List<ProductImageDTO> images;

    public ProductDTO() {
    }

    public ProductDTO(
            Integer id,
            String name,
            String description,
            BigDecimal price,
            Integer stock,
            Integer store_id,
            Integer category_id,
            Double rating,
            Integer sell_count,
            List<ProductImageDTO> images
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.store_id = store_id;
        this.category_id = category_id;
        this.rating = rating;
        this.sell_count = sell_count;
        this.images = images;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public Integer getStock() {
        return stock;
    }

    public Integer getStore_id() {
        return store_id;
    }

    public Integer getCategory_id() {
        return category_id;
    }

    public Double getRating() {
        return rating;
    }

    public Integer getSell_count() {
        return sell_count;
    }

    public List<ProductImageDTO> getImages() {
        return images;
    }
}
