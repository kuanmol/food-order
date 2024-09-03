package com.foodie.Service;

import com.foodie.model.User;

public interface UserService {
    User findUserByJwtToken(String jwt) throws Exception;

    User findUserByEmail(String email) throws Exception;

}
