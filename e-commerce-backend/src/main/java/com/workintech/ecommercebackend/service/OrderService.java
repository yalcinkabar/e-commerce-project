package com.workintech.ecommercebackend.service;

import com.workintech.ecommercebackend.dto.OrderItemRequest;
import com.workintech.ecommercebackend.dto.OrderRequest;
import com.workintech.ecommercebackend.entity.Address;
import com.workintech.ecommercebackend.entity.Order;
import com.workintech.ecommercebackend.entity.OrderItem;
import com.workintech.ecommercebackend.entity.Product;
import com.workintech.ecommercebackend.entity.User;
import com.workintech.ecommercebackend.repository.AddressRepository;
import com.workintech.ecommercebackend.repository.OrderRepository;
import com.workintech.ecommercebackend.repository.ProductRepository;
import com.workintech.ecommercebackend.dto.OrderProductDTO;
import com.workintech.ecommercebackend.dto.OrderResponse;
import com.workintech.ecommercebackend.dto.ProductImageDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final AddressRepository addressRepository;
    private final ProductRepository productRepository;

    public OrderService(
            OrderRepository orderRepository,
            AddressRepository addressRepository,
            ProductRepository productRepository
    ) {
        this.orderRepository = orderRepository;
        this.addressRepository = addressRepository;
        this.productRepository = productRepository;
    }

    public Order createOrder(
            OrderRequest request,
            User user
    ) {

        Order order = new Order();

        // Kullanıcı
        order.setUser(user);

        // Sipariş tarihi
        order.setOrderDate(request.getOrder_date());

        // Kart bilgileri
        order.setCardNo(request.getCard_no());
        order.setCardName(request.getCard_name());
        order.setCardExpireMonth(
                request.getCard_expire_month()
        );
        order.setCardExpireYear(
                request.getCard_expire_year()
        );
        order.setCardCcv(request.getCard_ccv());

        // Toplam fiyat
        order.setPrice(request.getPrice());

        // Adres
        Address address =
                addressRepository.findById(
                        request.getAddress_id()
                ).orElseThrow(() ->
                        new RuntimeException(
                                "Adres bulunamadı."
                        )
                );

        // Adres kullanıcıya ait mi?
        if (!address.getUser().getId()
                .equals(user.getId())) {

            throw new RuntimeException(
                    "Bu adres size ait değil."
            );
        }

        order.setAddress(address);

        // Ürünler
        List<OrderItem> orderItems = new ArrayList<>();

        for (OrderItemRequest itemRequest :
                request.getProducts()) {

            Product product =
                    productRepository.findById(
                            itemRequest.getProduct_id()
                    ).orElseThrow(() ->
                            new RuntimeException(
                                    "Ürün bulunamadı."
                            )
                    );

            OrderItem orderItem = new OrderItem();

            orderItem.setOrder(order);
            orderItem.setProduct(product);
            orderItem.setCount(
                    itemRequest.getCount()
            );
            orderItem.setDetail(
                    itemRequest.getDetail()
            );

            orderItems.add(orderItem);
        }

        order.setProducts(orderItems);

        return orderRepository.save(order);
    }

    public List<OrderResponse> getUserOrders(User user) {

        List<Order> orders =
                orderRepository
                        .findByUserOrderByOrderDateDesc(user);

        return orders.stream()
                .map(order -> {

                    List<OrderProductDTO> products =
                            order.getProducts()
                                    .stream()
                                    .map(item -> {

                                        Product product =
                                                item.getProduct();

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

                                        return new OrderProductDTO(
                                                product.getId(),
                                                product.getName(),
                                                product.getPrice(),
                                                item.getCount(),
                                                images
                                        );
                                    })
                                    .toList();

                    return new OrderResponse(
                            order.getId(),
                            order.getOrderDate(),
                            order.getPrice(),
                            products
                    );
                })
                .toList();
    }
}