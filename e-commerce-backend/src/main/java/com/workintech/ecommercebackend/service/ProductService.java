package com.workintech.ecommercebackend.service;

import com.workintech.ecommercebackend.dto.ProductDTO;
import com.workintech.ecommercebackend.dto.ProductImageDTO;
import com.workintech.ecommercebackend.entity.Product;
import com.workintech.ecommercebackend.repository.ProductRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<ProductDTO> getAllProducts(
            Integer category,
            String filter,
            String sort,
            int limit,
            int offset
    ) {

        Specification<Product> specification =
                Specification.unrestricted();

        // Kategori filtresi
        if (category != null) {
            specification = specification.and(
                    (root, query, cb) ->
                            cb.equal(
                                    root.get("category").get("id"),
                                    category
                            )
            );
        }

        // Arama filtresi
        if (filter != null && !filter.isBlank()) {

            String search = "%" +
                    filter.toLowerCase() +
                    "%";

            specification = specification.and(
                    (root, query, cb) ->
                            cb.like(
                                    cb.lower(root.get("name")),
                                    search
                            )
            );
        }

        // Sıralama
        Sort sorting = createSort(sort);

        int page = offset / limit;

        Pageable pageable =
                PageRequest.of(
                        page,
                        limit,
                        sorting
                );

        return productRepository
                .findAll(specification, pageable)
                .getContent()
                .stream()
                .map(this::convertToDTO)
                .toList();
    }

    public long getTotalProducts(
            Integer category,
            String filter
    ) {

        Specification<Product> specification =
                Specification.unrestricted();

        // Kategori
        if (category != null) {
            specification = specification.and(
                    (root, query, cb) ->
                            cb.equal(
                                    root.get("category").get("id"),
                                    category
                            )
            );
        }

        // Arama
        if (filter != null && !filter.isBlank()) {

            String search = "%" +
                    filter.toLowerCase() +
                    "%";

            specification = specification.and(
                    (root, query, cb) ->
                            cb.like(
                                    cb.lower(root.get("name")),
                                    search
                            )
            );
        }

        return productRepository
                .count(specification);
    }

    private Sort createSort(String sort) {

        if (sort == null || sort.isBlank()) {
            // Popularity
            return Sort.by(
                    Sort.Direction.DESC,
                    "sellCount"
            );
        }

        return switch (sort) {

            case "price:asc" ->
                    Sort.by(
                            Sort.Direction.ASC,
                            "price"
                    );

            case "price:desc" ->
                    Sort.by(
                            Sort.Direction.DESC,
                            "price"
                    );

            case "rating:asc" ->
                    Sort.by(
                            Sort.Direction.ASC,
                            "rating"
                    );

            case "rating:desc" ->
                    Sort.by(
                            Sort.Direction.DESC,
                            "rating"
                    );

            default ->
                    Sort.by(
                            Sort.Direction.DESC,
                            "sellCount"
                    );
        };
    }

    public ProductDTO getProductById(Integer id) {

        Product product =
                productRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Product not found: " + id
                                )
                        );

        return convertToDTO(product);
    }

    public ProductDTO convertToDTO(Product product) {

        List<ProductImageDTO> images =
                product.getImages()
                        .stream()
                        .map(image ->
                                new ProductImageDTO(
                                        image.getUrl(),
                                        image.getIndex()
                                )
                        )
                        .toList();

        return new ProductDTO(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getPrice(),
                product.getStock(),
                product.getStoreId(),
                product.getCategory().getId(),
                product.getRating(),
                product.getSellCount(),
                images
        );
    }
}