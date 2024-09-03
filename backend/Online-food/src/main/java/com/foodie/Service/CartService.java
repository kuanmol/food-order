package com.foodie.Service;

import com.foodie.model.Cart;
import com.foodie.model.CartItem;
import com.foodie.request.AddCartItemRequest;

public interface CartService {
    CartItem addItemCart(AddCartItemRequest request, String jwt) throws Exception;

    CartItem updateCartItemQuantity(Long cartItemId, int quantity) throws Exception;

    Cart removeItemFromCart(Long cartItemId, String jwt) throws Exception;

    Long calculateCartTotals(Cart cart) throws Exception;

    Cart findCartById(Long id) throws Exception;

    Cart findCartByUserId(Long userId) throws Exception;

    Cart clearCart(Long userId) throws Exception;
}
