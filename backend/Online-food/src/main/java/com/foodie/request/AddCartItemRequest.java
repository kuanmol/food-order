package com.foodie.request;

import lombok.Data;

import java.util.List;

@Data
public class AddCartItemRequest {
    private Long foodId;
    private int quantity;
    private List<String> ingredients;
}
