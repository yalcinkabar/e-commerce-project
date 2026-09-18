package com.workintech.ecommercebackend.controller;

import com.workintech.ecommercebackend.dto.ProductDTO;
import com.workintech.ecommercebackend.dto.ProductResponse;
import com.workintech.ecommercebackend.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ProductResponse getProducts(
            @RequestParam(required = false) Integer category,
            @RequestParam(required = false, defaultValue = "") String filter,
            @RequestParam(required = false, defaultValue = "") String sort,
            @RequestParam(defaultValue = "12") int limit,
            @RequestParam(defaultValue = "0") int offset
    ) {

        List<ProductDTO> products =
                productService.getAllProducts(
                        category,
                        filter,
                        sort,
                        limit,
                        offset
                );

        long total =
                productService.getTotalProducts(
                        category,
                        filter
                );

        return new ProductResponse(
                products,
                total
        );
    }

    @GetMapping("/{id}")
    public ProductDTO getProduct(
            @PathVariable Integer id
    ) {

        return productService.getProductById(id);
    }
}