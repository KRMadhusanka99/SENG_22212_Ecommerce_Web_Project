package com.EcommerceApp.backendapp.DTO;

import com.EcommerceApp.backendapp.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
