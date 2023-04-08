import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './css/orderlist.css';


const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/orders').then((response) => {
      setOrders(response.data);
    });
  }, []);

  const handleCancelOrder = (orderId) => {
    axios.put(`/orders/${orderId}`, { status: 'Cancelled' }).then(() => {
      setOrders((prevOrders) =>
        prevOrders.map((order) => {
          if (order.id === orderId) {
            order.status = 'Cancelled';
          }
          return order;
        })
      );
    });
  };

  return (
    <div className='container'>
      <h1>Orders</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Date</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>
                <Link to={`/admin/orders/${order.id}`}>{order.id}</Link>
              </td>
              <td>{order.user.name}</td>
              <td>{moment(order.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
              <td>{order.totalPrice}</td>
              <td>{order.status}</td>
              <td>
                {order.status === 'Pending' && (
                  <button className='btn btn-danger' onClick={() => handleCancelOrder(order.id)}>
                    Cancel
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;