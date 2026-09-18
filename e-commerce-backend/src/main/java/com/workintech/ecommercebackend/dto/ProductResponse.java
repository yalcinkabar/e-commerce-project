package com.workintech.ecommercebackend.dto;

import java.util.List;

public class ProductResponse {

    private List<ProductDTO> products;
    private long total;

    public ProductResponse(List<ProductDTO> products, long total) {
        this.products = products;
        this.total = total;
    }

    public List<ProductDTO> getProducts() {
        return products;
    }

    public long getTotal() {
        return total;
    }
}
