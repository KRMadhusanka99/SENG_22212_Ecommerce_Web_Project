package com.EcommerceApp.backendapp.Service.Implementation;

import com.EcommerceApp.backendapp.Entity.*;
import com.EcommerceApp.backendapp.Repository.OrderItemRepository;
import com.EcommerceApp.backendapp.Repository.OrderRepository;
import com.EcommerceApp.backendapp.Repository.ShoppingCartRepository;
import com.EcommerceApp.backendapp.Service.OrderService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    @Transactional
    public Order placeOrder(User user, ShoppingCart cart, String address) {
        List<CartItem> cartItems = cart.getItems();
        Order order = new Order();
        order.setUser(cart.getUser());
        order.setOrderDate(LocalDate.now());
        orderRepository.save(order);

        List<OrderItem> orderItems = new ArrayList<>();
        for (CartItem cartItem : cartItems) {
            OrderItem orderItem = new OrderItem();
            orderItem.setProduct(cartItem.getProduct());
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setOrder(order);
            orderItem.setProductPrice(cartItem.getProduct());
            orderItemRepository.save(orderItem);
            orderItems.add(orderItem);
        }
        order.setOrderItems(orderItems);
        order.setTotalAmount();
        orderRepository.save(order);
        cart.getItems().removeAll(cartItems);
        shoppingCartRepository.save(cart);

        return order;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public void deleteOrderById(Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Order Id not found: " + id));

        orderItemRepository.deleteAll(order.getOrderItems());
        orderRepository.delete(order);
    }
}
