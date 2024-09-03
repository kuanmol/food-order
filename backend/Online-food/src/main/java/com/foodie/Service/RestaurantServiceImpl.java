package com.foodie.Service;

import com.foodie.dto.RestaurantDto;
import com.foodie.model.Address;
import com.foodie.model.Restaurant;
import com.foodie.model.User;
import com.foodie.repository.AddressRepository;
import com.foodie.repository.RestaurantRepository;
import com.foodie.repository.UserRepositroy;
import com.foodie.request.CreateRestaurantRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class RestaurantServiceImpl implements RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepositroy userRepositroy;

    @Override
    public Restaurant createRestaurant(CreateRestaurantRequest request, User user) {
        Address address = addressRepository.save(request.getAddress());

        Restaurant restaurant = new Restaurant();
        restaurant.setAddress(address);
        restaurant.setContactInformation(request.getContactInformation());
        restaurant.setCuisineType(request.getCuisineType());
        restaurant.setDescription(request.getDescription());
        restaurant.setImages(request.getImages());
        restaurant.setName(request.getName());
        restaurant.setOpeningHours(request.getOpeningHours());
        restaurant.setRegistrationDate(LocalDateTime.now());
        restaurant.setOwner(user);

        return restaurantRepository.save(restaurant);
    }

    @Override
    public Restaurant updateRestaurant(Long resId, CreateRestaurantRequest updateRestaurant) throws Exception {
        Restaurant restaurant = findRestaurantById(resId);

        if (updateRestaurant.getCuisineType() != null) {
            restaurant.setCuisineType(updateRestaurant.getCuisineType());
        }
        if (updateRestaurant.getDescription() != null) {
            restaurant.setDescription(updateRestaurant.getDescription());
        }
        if (updateRestaurant.getName() != null) {
            restaurant.setName(updateRestaurant.getName());
        }
        if (updateRestaurant.getAddress() != null) {
            Address address = addressRepository.save(updateRestaurant.getAddress());
            restaurant.setAddress(address);
        }
        if (updateRestaurant.getContactInformation() != null) {
            restaurant.setContactInformation(updateRestaurant.getContactInformation());
        }
        if (updateRestaurant.getOpeningHours() != null) {
            restaurant.setOpeningHours(updateRestaurant.getOpeningHours());
        }
        if (updateRestaurant.getImages() != null) {
            restaurant.setImages(updateRestaurant.getImages());
        }

        return restaurantRepository.save(restaurant);
    }

    @Override
    public void deleteRestaurant(Long resId) throws Exception {
        Restaurant restaurant = findRestaurantById(resId);
        restaurantRepository.delete(restaurant);
    }

    @Override
    public List<Restaurant> getAllRestaurant() {
        return restaurantRepository.findAll();
    }

    @Override
    public List<Restaurant> searchRestaurant(String keyword) {
        return restaurantRepository.findBySearchQuery(keyword);
    }

    @Override
    public Restaurant findRestaurantById(Long id) throws Exception {
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(id);
        if (optionalRestaurant.isEmpty()) {
            throw new Exception("Restaurant not found with this ID");
        }
        return optionalRestaurant.get();
    }

    @Override
    public Restaurant getRestaurantByUserId(Long userId) throws Exception {
        Restaurant restaurant = restaurantRepository.findByOwnerId(userId);
        if (restaurant == null) {
            throw new Exception("Owner not found with this ID: " + userId);
        }
        return restaurant;
    }

    @Override
    public RestaurantDto addToFavorites(Long restaurantID, User user) throws Exception {
        Restaurant restaurant = findRestaurantById(restaurantID);
        RestaurantDto restaurantDto = new RestaurantDto();
        restaurantDto.setDescriptions(restaurant.getDescription());
        restaurantDto.setImages(restaurant.getImages());
        restaurantDto.setTitle(restaurant.getName());
        restaurantDto.setId(restaurantID);
        if (user.getFavorites().contains(restaurantDto)) {
            user.getFavorites().remove(restaurantDto);
        } else {
            user.getFavorites().add(restaurantDto);
        }
        userRepositroy.save(user);
        return restaurantDto;
    }

    @Override
    public Restaurant updateRestaurantStatus(Long id) throws Exception {
        Restaurant restaurant = findRestaurantById(id);
        restaurant.setOpen(!restaurant.isOpen());
        return restaurantRepository.save(restaurant);
    }
}
