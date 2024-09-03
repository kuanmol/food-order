package com.foodie.Service;

import com.foodie.model.Category;
import com.foodie.model.Food;
import com.foodie.model.Restaurant;
import com.foodie.request.CreateFoodRequest;

import java.util.List;

public interface FoodService {

    Food createFood(CreateFoodRequest request, Category category, Restaurant restaurant);

    void deleteFood(Long foodId) throws Exception;

    List<Food> getRestaurantsFood(Long restaurantId, boolean isVeg, boolean isNonVeg, boolean isSeasonal
            , String foodCategory);

    List<Food> searchFood(String keyword);

    Food findFoodById(Long foodId) throws Exception;

    Food updateAvailabilityStatus(Long foodId) throws Exception;

}
