package com.workintech.ecommercebackend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(
        name = "users",
        schema = "fsweb2",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "email")
        }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String email;

    private String password;

    private String role;
}
