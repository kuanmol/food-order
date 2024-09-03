package com.foodie.Service;

import com.foodie.dto.RestaurantDto;
import com.foodie.model.Restaurant;
import com.foodie.model.User;
import com.foodie.request.CreateRestaurantRequest;

import java.util.List;

public interface RestaurantService {
    Restaurant createRestaurant(CreateRestaurantRequest request, User user);

    Restaurant updateRestaurant(Long resId, CreateRestaurantRequest updateRestaurant) throws Exception;

    void deleteRestaurant(Long resId) throws Exception;

    List<Restaurant> getAllRestaurant();

    List<Restaurant> searchRestaurant(String keyword);

    Restaurant findRestaurantById(Long id) throws Exception;

    Restaurant getRestaurantByUserId(Long userId) throws Exception;

    RestaurantDto addToFavorites(Long restaurantID, User user) throws Exception;

    Restaurant updateRestaurantStatus(Long id) throws Exception;
}
