package com.foodie.controller;

import com.foodie.Service.CategoryService;
import com.foodie.Service.UserService;
import com.foodie.model.Category;
import com.foodie.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;
    @Autowired
    private UserService userService;

    @PostMapping()
    public ResponseEntity<Category> createCategory(@RequestBody Category category, @RequestHeader("Authorization")
    String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Category category1 = categoryService.createCategory(category.getName(), user.getId());
        return new ResponseEntity<>(category1, HttpStatus.CREATED);
    }

    @GetMapping("/category/restaurant/{id}")
    public ResponseEntity<List<Category>> getRestaurantCategory(
            @PathVariable Long id,
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        List<Category> category1 = categoryService.findCategoryByRestaurantId(id);

        return new ResponseEntity<>(category1, HttpStatus.CREATED);
    }
}
