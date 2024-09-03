package com.foodie.repository;

import com.foodie.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface
CartRepository extends JpaRepository<Cart, Long> {
    Cart findByCustomerId(Long id);
}
