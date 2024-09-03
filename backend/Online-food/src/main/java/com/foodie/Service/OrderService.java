package com.foodie.Service;

import com.foodie.model.Order;
import com.foodie.model.User;
import com.foodie.request.OrderRequest;
import org.aspectj.weaver.ast.Or;

import java.util.List;

public interface OrderService {
    Order createOrder(OrderRequest order, User user) throws Exception;

    Order updateOrder(Long orderId, String orderStatus) throws Exception;

    void calcOrder(Long orderId) throws Exception;

    List<Order> getUserOrder(Long userId) throws Exception;

    List<Order> getRestaurantOrder(Long restaurantId, String orderStatus) throws Exception;

    public Order findOrderById(Long orderId) throws Exception;
}
