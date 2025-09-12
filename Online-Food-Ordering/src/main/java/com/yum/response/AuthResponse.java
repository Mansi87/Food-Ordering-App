package com.yum.response;

import com.yum.model.USER_ROLE;
import lombok.Data;

@Data
public class AuthResponse {

    private String jwt;
    private String message;

    private USER_ROLE role;

}
