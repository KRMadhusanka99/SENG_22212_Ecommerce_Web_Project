import React from "react";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';

function Subtotal(){

<<<<<<< HEAD
=======
    
>>>>>>> main

    const getCartTotal = (basket) =>
    basket?.reduce((amount,item) => item.price + amount, 0);

    const [{basket}, dispatch] = useStateValue();
    
    return(
    <div className="subtotal">
<<<<<<< HEAD
         <div className='bottom'>
            <div className='left'>
              <button type='button' className='clear-cart-btn text-danger fs-15 text-uppercase fw-4'>
                <i className='fas fa-trash'></i>
                <span className='mx-1'>Clear Cart</span>
              </button>
            </div>

          <div className="right">
=======
>>>>>>> main
        {/*price*/}
        <CurrencyFormat
            renderText = {(value) => (
                <p>
                    Subtotal({basket.length} items) : <strong>{'${value}'}</strong>
                </p>
            )

            }
            decimalScale={2}
            value={getCartTotal(basket)}
            displayType = {"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
<<<<<<< HEAD
        <button type = "button" className='checkout-button'>Check Out</button>
        </div>
        </div>
=======
        <button className="checkout-button">Proceed to Checkout</button>
       
>>>>>>> main
    </div>

    );
}

export default Subtotal;