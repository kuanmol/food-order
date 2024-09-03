package com.foodie.Service;

import com.foodie.config.JwtProvider;
import com.foodie.model.User;
import com.foodie.repository.UserRepositroy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepositroy userRepositroy;

    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public User findUserByJwtToken(String jwt) throws Exception {
        String email = jwtProvider.getEmailFromJwtToken(jwt);
        User user = findUserByEmail(email);
        return user;
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        User user = userRepositroy.findByEmail(email);
        if (user == null) {
            throw new Exception("User not found");
        }
        return user;
    }
}
