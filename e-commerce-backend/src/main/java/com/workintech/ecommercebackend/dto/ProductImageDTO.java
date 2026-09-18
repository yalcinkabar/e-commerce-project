package com.workintech.ecommercebackend.dto;

public class ProductImageDTO {

    private String url;
    private Integer index;

    public ProductImageDTO() {
    }

    public ProductImageDTO(String url, Integer index) {
        this.url = url;
        this.index = index;
    }

    public String getUrl() {
        return url;
    }

    public Integer getIndex() {
        return index;
    }
}
