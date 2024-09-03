package com.foodie.controller;

import com.foodie.Service.IngredientsService;
import com.foodie.model.IngredientCategory;
import com.foodie.model.IngredientItem;
import com.foodie.request.IngredientCategoryRequest;
import com.foodie.request.IngredientRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientController {

    @Autowired
    private IngredientsService ingredientsService;

    @PostMapping("/category")
    public ResponseEntity<IngredientCategory> createIngredientCategory(
            @RequestBody IngredientCategoryRequest request
    ) throws Exception {
        IngredientCategory ingredientCategory = ingredientsService.createIngredientCategory(request.getName(), request.getRestaurantId());
        return new ResponseEntity<>(ingredientCategory, HttpStatus.CREATED);
    }

    @PostMapping()
    public ResponseEntity<IngredientItem> createIngredientItem(
            @RequestBody IngredientRequest request
    ) throws Exception {
        IngredientItem item = ingredientsService.createIngredientItem(request.getRestaurantId(),
                request.getName(), request.getCategoryId());
        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }

    @PutMapping("/{id}/stoke")
    public ResponseEntity<IngredientItem> updateIngredientStock(
            @PathVariable Long id
    ) throws Exception {
        IngredientItem item = ingredientsService.updateStock(id);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }

    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<IngredientItem>> getRestaurantIngredient(
            @PathVariable Long id
    ) throws Exception {
        List<IngredientItem> items = ingredientsService.findRestaurantIngredient(id);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/restaurant/{id}/category")
    public ResponseEntity<List<IngredientCategory>> getRestaurantIngredientCategory(
            @PathVariable Long id
    ) throws Exception {
        List<IngredientCategory> items = ingredientsService.findIngredientCategoryByRestaurant(id);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }
}
