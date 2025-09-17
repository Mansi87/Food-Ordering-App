package com.yum.Service;

import com.yum.model.Order;
import com.yum.model.User;
import com.yum.request.OrderRequest;

public interface OrderService {

    public Order createOrder(OrderRequest order, User user);
}
