package com.workintech.ecommercebackend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "categories", schema = "fsweb2")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Category {

    @Id
    private Integer id;

    private String code;

    private String title;

    private String img;

    private Double rating;

    private String gender;
}
