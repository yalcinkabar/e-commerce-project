package com.workintech.ecommercebackend.config;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;
import com.workintech.ecommercebackend.entity.Category;
import com.workintech.ecommercebackend.entity.Product;
import com.workintech.ecommercebackend.entity.ProductImage;
import com.workintech.ecommercebackend.repository.CategoryRepository;
import com.workintech.ecommercebackend.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;
    private final ObjectMapper objectMapper;

    public DataLoader(
            CategoryRepository categoryRepository,
            ProductRepository productRepository,
            ObjectMapper objectMapper
    ) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws Exception {

        // Daha önce veri yüklenmişse tekrar yükleme
        if (categoryRepository.count() > 0 || productRepository.count() > 0) {
            System.out.println("Veriler zaten mevcut. DataLoader çalıştırılmadı.");
            return;
        }

        loadCategories();
        loadProducts();

        System.out.println("=================================");
        System.out.println("JSON verileri PostgreSQL'e aktarıldı.");
        System.out.println("Kategori sayısı: " + categoryRepository.count());
        System.out.println("Ürün sayısı: " + productRepository.count());
        System.out.println("=================================");
    }

    private void loadCategories() throws Exception {

        InputStream inputStream =
                getClass().getResourceAsStream("/categories.json");

        if (inputStream == null) {
            throw new RuntimeException("categories.json bulunamadı!");
        }

        JsonNode root = objectMapper.readTree(inputStream);

        // categories.json doğrudan array ise
        JsonNode categories = root.isArray()
                ? root
                : root.get("categories");

        if (categories == null || !categories.isArray()) {
            throw new RuntimeException(
                    "categories.json formatı beklenenden farklı!"
            );
        }

        List<Category> categoryList = new ArrayList<>();

        for (JsonNode node : categories) {

            Category category = new Category();

            category.setId(node.get("id").asInt());
            category.setCode(node.get("code").asText());
            category.setTitle(node.get("title").asText());
            category.setImg(
                    node.get("img").isNull()
                            ? null
                            : node.get("img").asText()
            );
            category.setRating(
                    node.get("rating").isNull()
                            ? null
                            : node.get("rating").asDouble()
            );
            category.setGender(
                    node.get("gender").isNull()
                            ? null
                            : node.get("gender").asText()
            );

            categoryList.add(category);
        }

        categoryRepository.saveAll(categoryList);

        System.out.println(
                categoryList.size() + " kategori yüklendi."
        );
    }

    private void loadProducts() throws Exception {

        InputStream inputStream =
                getClass().getResourceAsStream("/products.json");

        if (inputStream == null) {
            throw new RuntimeException("products.json bulunamadı!");
        }

        JsonNode root = objectMapper.readTree(inputStream);

        JsonNode products = root.get("products");

        if (products == null || !products.isArray()) {
            throw new RuntimeException(
                    "products.json formatı beklenenden farklı!"
            );
        }

        List<Product> productList = new ArrayList<>();

        // Bütün ürünlerde kullanılacak ortak resim
        String commonImageUrl =
                "https://cdn.dsmcdn.com/ty155/product/media/images/20210806/13/116221695/81629339/1/1_org_zoom.jpg";

        for (JsonNode node : products) {

            Product product = new Product();

            product.setId(node.get("id").asInt());
            product.setName(node.get("name").asText());

            product.setDescription(
                    node.get("description").isNull()
                            ? null
                            : node.get("description").asText()
            );

            product.setPrice(
                    node.get("price").isNull()
                            ? null
                            : BigDecimal.valueOf(
                            node.get("price").asDouble()
                    )
            );

            product.setStock(
                    node.get("stock").isNull()
                            ? null
                            : node.get("stock").asInt()
            );

            product.setStoreId(
                    node.get("store_id").isNull()
                            ? null
                            : node.get("store_id").asInt()
            );

            product.setRating(
                    node.get("rating").isNull()
                            ? null
                            : node.get("rating").asDouble()
            );

            product.setSellCount(
                    node.get("sell_count").isNull()
                            ? null
                            : node.get("sell_count").asInt()
            );

            // category_id → Category ilişkisi
            int categoryId = node.get("category_id").asInt();

            Category category = categoryRepository
                    .findById(categoryId)
                    .orElseThrow(() ->
                            new RuntimeException(
                                    "Kategori bulunamadı: " + categoryId
                            )
                    );

            product.setCategory(category);

            // Ortak ürün resmi
            ProductImage image = new ProductImage();

            image.setUrl(commonImageUrl);
            image.setIndex(0);
            image.setProduct(product);

            product.getImages().add(image);

            productList.add(product);
        }

        productRepository.saveAll(productList);

        System.out.println(
                productList.size() + " ürün yüklendi."
        );
    }
}
