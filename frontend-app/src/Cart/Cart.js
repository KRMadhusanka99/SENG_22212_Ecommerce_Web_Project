import React from "react";
import './Cart.css'
import Subtotal from '../Subtotal/Subtotal';
import {useStateValue} from '../StateProvider';
import ProductCart from '../ProductCart/ProductCart';
import Footer from '../Footer/Footer';
import shopping_cart from '../Picture/shopping_cart.png'

function Cart(){

    const[{basket}] = useStateValue();

    return(
        <div className="checkout">

            <div className="checkout-left">
                {
                    basket.length === 0 ? (
                        <div className="empty">
                            <h2 className="checkout-title">Your shopping basket is empty </h2>
                            <img src = {shopping_cart} alt = "" />
                            <p>You have no items in your basket. Buy one</p>
                            <button1><a href= "/">Go shopping Now</a></button1>
                        </div>
                    ):(
                        <div>
                            <h2 className="shoppingbaskettitle">Items in the Shopping Basket</h2>
                            <table >
                                <tbody>
                                <tr><th><div className='cart-cth'>
                                    <span className='cart-ctxt'>S.N.</span>
                                </div></th>
                                <th><div className='cart-cth'>
                                    <span className='cart-ctxt'>Product Image</span>
                                </div></th>
                                <th><div className='cart-cth'>
                                    <span className='cart-ctxt'>Product</span>
                                </div></th>
                                <th><div className='cart-cth'>
                                    <span className='cart-ctxt'>Unit Price</span>
                                </div></th>
                                <th><div className='cart-cth'>
                                    <span className='cart-ctxt'>Actions</span>
                                </div></th></tr>
                            </tbody>
                            </table>
                            {
                                basket.map(item => (
                                    <ProductCart
                                      id={item.id}
                                      title={item.title}
                                      image={item.image}
                                      price={item.price}

                                    />
                                ))
                            }
                        </div>
                    )
                }

            </div>
            {
                basket.length > 0 && (
                    <div className="checkout-right">
                        <Subtotal/>
                    </div>
                )
            }
            <div className="pos">
                <Footer/>
            </div>
        </div>

    )
}

export default Cart;

// import React from "react";
// import './Cart.css'
// import Subtotal from '../Subtotal/Subtotal';
// import {useStateValue} from '../StateProvider';
// import ProductCart from '../ProductCart/ProductCart';
// import Footer from '../Footer/Footer';

// function Cart(){

//     const[{basket}] = useStateValue();
    
//     return(
//         <div className="checkout">
            
//             <div className="checkout-left">
//                 {
//                     basket.length === 0 ? (
//                         <div>
//                             <h2 className="checkout-title">Your shopping basket is empty </h2>
//                             <p>You have no items in your basket. Buy one</p>
//                         </div>
//                     ):(
//                         <div>
//                             <h2 className="shoppingbaskettitle">Items in the Shopping Basket</h2>
//                             {
//                                 basket.map(item => (
//                                     <ProductCart
//                                       id={item.id}
//                                       title={item.title}
//                                       image={item.image}
//                                       price={item.price}
                                  
//                                     />
//                                 ))
//                             }
//                         </div>
//                     )
//                 }
                 
//             </div>
//             {
//                 basket.length > 0 && (
//                     <div className="checkout-right">
//                         <Subtotal/>
//                     </div>
//                 )
//             }
//             <div className="pos">
//                 <Footer/>
//             </div>
//         </div>
        
//     )
// }

// export default Cart;