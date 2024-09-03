package com.foodie.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Food {
    @ManyToMany
    private final List<IngredientItem> ingredient = new ArrayList<>();

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long foodId;

    private String name;
    private String description;
    private Long price;

    @ManyToOne
    private Category foodCategory;

    @Column(length = 1000)
    @ElementCollection
    private List<String> images;

    private Boolean available;
    @ManyToOne
    private Restaurant restaurant;

    private boolean isVeg;
    private boolean isSeasonal;

    @ManyToMany
    private List<IngredientItem> ingredients = new ArrayList<>();

    private Date creationDate;
}
