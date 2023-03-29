package com.EcommerceApp.backendapp.Service;

import com.EcommerceApp.backendapp.DTO.CartItemRepository;
import com.EcommerceApp.backendapp.DTO.OrderDetailRepository;
import com.EcommerceApp.backendapp.DTO.OrderRepository;
import com.EcommerceApp.backendapp.DTO.ShoppingCartRepository;
import com.EcommerceApp.backendapp.entity.CartItem;
import com.EcommerceApp.backendapp.entity.Order;
import com.EcommerceApp.backendapp.entity.OrderDetail;
import com.EcommerceApp.backendapp.entity.ShoppingCart;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;

public class OrderServiceImpl implements OrderService{
    @Autowired
    private OrderDetailRepository orderDetailRepository;

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ShoppingCartRepository shoppingCartRepository;
    @Autowired
    private CartItemRepository cartItemRepository;

    @Override
    public void saveOrder(ShoppingCart cart) {
        Order order=new Order();
        order.setOrderStatus("Pending");
        order.setOrderDate(new Date());
        order.setUser(cart.getUser());
        order.setTotalPrice(cart.getTotalPrice());
        List<OrderDetail> orderDetailList=new ArrayList<>();
        for(CartItem item : cart.getCartItem()){
            OrderDetail orderDetail = new OrderDetail();
            orderDetail.setOrder(order);
            orderDetail.setQuantity(item.getQuantity());
            orderDetail.setProduct(item.getProduct());
            orderDetail.setUnitPrice(item.getProduct().getPrice());
            orderDetailRepository.save(orderDetail);
            orderDetailList.add(orderDetail);
            cartItemRepository.delete(item);
        }
        order.setOrderDetailList(orderDetailList);
        cart.setCartItem(new HashSet<>());
        cart.setItemsNumber(0);
        cart.setTotalPrice((double) 0);
        shoppingCartRepository.save(cart);
        orderRepository.save(order);
    }

    @Override
    public void acceptOrder(Long id) {
        Order order = orderRepository.getById(id);
        order.setDeliveryDate(new Date());
        order.setOrderStatus("Shipping");
        orderRepository.save(order);
    }

    @Override
    public void cancelOrder(Long id) {
        orderRepository.deleteById(id);
    }
}
