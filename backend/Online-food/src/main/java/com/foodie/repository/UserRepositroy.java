package com.foodie.repository;

import com.foodie.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepositroy extends JpaRepository<User, Long> {
    User findByEmail(String username);

}
