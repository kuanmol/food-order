package com.foodie.request;

import lombok.Data;

@Data
public class updateCartItemRequest {
    private Long cartItem;
    private int quantity;
}
