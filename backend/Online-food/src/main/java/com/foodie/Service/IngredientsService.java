package com.foodie.Service;

import com.foodie.model.IngredientCategory;
import com.foodie.model.IngredientItem;

import java.util.List;

public interface IngredientsService {

    IngredientCategory createIngredientCategory(String name, Long restaurantId) throws Exception;

    IngredientCategory findIngredientCategoryById(Long id) throws Exception;

    List<IngredientCategory> findIngredientCategoryByRestaurant(Long id) throws Exception;

    IngredientItem createIngredientItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception;

    List<IngredientItem> findRestaurantIngredient(Long restaurantId);

    IngredientItem updateStock(Long id) throws Exception;
}
