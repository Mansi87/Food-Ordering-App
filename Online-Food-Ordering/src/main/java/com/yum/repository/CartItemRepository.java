package com.yum.repository;

import com.yum.model.Cart;
import com.yum.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {



}
