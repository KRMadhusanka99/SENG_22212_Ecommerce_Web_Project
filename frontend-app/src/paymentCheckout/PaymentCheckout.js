import React from "react";
import './PaymentCheckout.css';
import Product from "../data";

function paymentCheckout() {
    return ( 
        <div className="outer">
        <div class="basic">
        <h1>Billing Address</h1>
            <div className="info">            
                <div class="address">
                  <label for="fname"><i class="fa fa-user"></i> Full Name</label><br/>
                  <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
                  
                  <label for="adr"><br/><i class="fa fa-address-card-o"></i> Address</label><br/>
                  <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                  
      
                  <div class="row">
                    <div class="col-50">
                      <label for="state">State</label><br/>
                      <input type="text" id="state" name="state" placeholder="NY"/>
                    </div>
                   
                    </div>
                    </div>
      
                <div className="payment">
                <label for="email"><i class="fa fa-envelope"></i> Email</label><br/>
                  <input type="text" id="email" name="email" placeholder="john@example.com"/>
                  <label for="city"><br/><i class="fa fa-institution"></i> City</label><br/>
                  <input type="text" id="city" name="city" placeholder="New York"/>
                  <div class="col-50">
                      <label for="zip">Zip</label><br/>
                      <input type="text" id="zip" name="zip" placeholder="10001"/>
                    </div>
                </div>

                {/* <div class="payment">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Cards</label><br/>
                  <div class="icon-container">
                    <i class="fa-brands fa-cc-visa" ></i>
                    <i class="fa-brands fa-cc-amex" ></i>
                    <i class="fa-brands fa-cc-mastercard" ></i>
                    <i class="fa-brands fa-cc-discover" ></i>
                  </div><br/>
                  <label for="cname">Name on Card</label><br/>
                  <input type="text" id="cname" name="cardname" placeholder="John More Doe"/><br/>
                  <label for="ccnum">Credit card number</label><br/>
                  <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/><br/>
                  <label for="expmonth">Exp Month</label><br/>
                  <input type="text" id="expmonth" name="expmonth" placeholder="September"/><br/>
      
                  <div class="row">
                    <div class="col-50">
                      <label for="expyear">Exp Year</label><br/>
                      <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                    </div>
                    <div class="col-50">
                      <label for="cvv">CVV</label><br/>
                      <input type="text" id="cvv" name="cvv" placeholder="352"/>
                    </div>
                  </div>
                  </div> */}
</div>  
              <label><br/>
                <input className="checkbox" type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
              </label><br/><br/>
              <button1>Continue to checkout</button1>
</div>   
        <div class="cart">
            <h4>Cart
              <span class="price">
                <i class="fa fa-shopping-cart"></i>
                <b>4</b>
              </span>
            </h4>
            <p><a href="#">Product 1</a> <span class="price">$15</span></p>
            <p><a href="#">Product 2</a> <span class="price">$5</span></p>
            <p><a href="#">Product 3</a> <span class="price">$8</span></p>
            <p><a href="#">Product 4</a> <span class="price">$2</span></p>
            <hr/>
            <p>Total <span class="price" ><b>$30</b></span></p>
          </div>

      </div>
    )
}

export default paymentCheckout;