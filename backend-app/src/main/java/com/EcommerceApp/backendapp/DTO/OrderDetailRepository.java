package com.EcommerceApp.backendapp.DTO;

import com.EcommerceApp.backendapp.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
}
