package com.foodie.Service;

import com.foodie.model.IngredientCategory;
import com.foodie.model.IngredientItem;
import com.foodie.model.Restaurant;
import com.foodie.repository.IngredientCategoryRepository;
import com.foodie.repository.IngredientItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientServiceImpl implements IngredientsService {

    @Autowired
    private IngredientItemRepository ingredientItemRepository;
    @Autowired
    private IngredientCategoryRepository ingrediantCategoryRespository;
    @Autowired
    private RestaurantService restaurantService;

    @Override
    public IngredientCategory createIngredientCategory(String name, Long restaurantId) throws Exception {

        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
        IngredientCategory category = new IngredientCategory();
        category.setRestaurant(restaurant);
        category.setName(name);
        return ingrediantCategoryRespository.save(category);
    }

    @Override
    public IngredientCategory findIngredientCategoryById(Long id) throws Exception {
        Optional<IngredientCategory> optionalIngredientCategory = ingrediantCategoryRespository.findById(id);
        if (optionalIngredientCategory.isEmpty()) {
            throw new Exception("ingredient not found");
        }
        return optionalIngredientCategory.get();
    }

    @Override
    public List<IngredientCategory> findIngredientCategoryByRestaurant(Long id) throws Exception {
        restaurantService.findRestaurantById(id);
        return ingrediantCategoryRespository.findByRestaurantId(id);
    }

    @Override
    public IngredientItem createIngredientItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
        IngredientCategory category = findIngredientCategoryById(categoryId);
        IngredientItem ingredientItem = new IngredientItem();
        ingredientItem.setName(ingredientName);
        ingredientItem.setRestaurant(restaurant);
        ingredientItem.setCategory(category);
        IngredientItem ingredientItem1 = ingredientItemRepository.save(ingredientItem);
        category.getItems().add(ingredientItem1);
        return ingredientItem1;
    }

    @Override
    public List<IngredientItem> findRestaurantIngredient(Long restaurantId) {
        return ingredientItemRepository.findByRestaurantId(restaurantId);
    }

    @Override
    public IngredientItem updateStock(Long id) throws Exception {
        Optional<IngredientItem> optionalIngredientItem = ingredientItemRepository.findById(id);
        if (optionalIngredientItem.isEmpty()) {
            throw new Exception("ingredient not found");
        }
        IngredientItem ingredientItem = optionalIngredientItem.get();
        ingredientItem.setInStock(!ingredientItem.isInStock());
        return ingredientItemRepository.save(ingredientItem);
    }
}
