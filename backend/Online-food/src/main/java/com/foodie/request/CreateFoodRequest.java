package com.foodie.request;

import com.foodie.model.Category;
import com.foodie.model.IngredientItem;
import lombok.Data;
import lombok.Getter;

import java.util.List;

@Data
public class CreateFoodRequest {
    private String name;
    private String description;
    private Long price;
    private Category category;
    private List<String> images;
    private Long restaurantId;
    private boolean vegetrian;
    private boolean seasonal;
    @Getter
    private List<IngredientItem> ingredients;

}
