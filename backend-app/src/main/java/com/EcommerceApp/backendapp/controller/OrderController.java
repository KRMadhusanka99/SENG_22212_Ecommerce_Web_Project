package com.EcommerceApp.backendapp.Controller;

import com.EcommerceApp.backendapp.Entity.Order;
import com.EcommerceApp.backendapp.Entity.ShoppingCart;
import com.EcommerceApp.backendapp.Entity.User;
import com.EcommerceApp.backendapp.Service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/order")
@CrossOrigin
public class OrderController {
    private OrderService orderService;

    @GetMapping("/viewAll")
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.ok().body(orders);
    }

    @PostMapping("/createOrder")
    public ResponseEntity<Order> createOrder(@RequestBody User user, @RequestBody ShoppingCart cart, @RequestBody String address) {
        Order savedOrder = orderService.placeOrder(user, cart, address);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedOrder);
    }

    @DeleteMapping("/deleteOrder/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrderById(id);
        return ResponseEntity.noContent().build();
    }

}
