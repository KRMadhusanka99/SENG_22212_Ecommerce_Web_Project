import React, { useState } from "react";
import './Product.css';
import { useStateValue } from '../StateProvider';
import { Link } from "react-router-dom";

function Product({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const [cartId, setCartId] = useState(null);

  const addToBasket = () => {
    // Check if the user is logged in
    const user_id = 1; // Replace with the user ID of the logged-in user
    if (user_id) {
      // Check if the cart ID is already set
      const cartId=114;
      if (cartId !== null) {
        // Add the item to the existing cart
        fetch(`http://localhost:8090/cart/add/items?cartId=114&productId=${id}&quantity=1`, {
          method: 'POST'
        })
          .then(response => console.log(response))
          .catch(error => console.error(error));
      } else {
        // Create a new cart
        fetch(`http://localhost:8090/cart/create?user_id=${user_id}`, {
          method: 'POST'
        })
          .then(response => response.json())
          .then(data => {
            setCartId(data.id); // Set the cart ID for future use
            // Add the item to the cart
            fetch(`http://localhost:8090/cart/add/items?cartId=${data.id}&productId=${id}&quantity=1`, {
              method: 'POST'
            })
              .then(response => console.log(response))
              .catch(error => console.error(error));
          })
          .catch(error => console.error(error));
      }

      // Add the item to the local basket state
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          cartId: cartId // Pass the cart ID to the item
        }
      });
    }
  };

  return (
    <div className="product">
      <div className="product-info">
        <Link to={`/SingleProduct/${id}`}>
          <p>{title}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </Link>
      </div>
      <img src={image} alt="pic"/>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

// import React, { useState, useContext } from "react";
// import './Product.css';
// import { useStateValue } from '../StateProvider';
// import { Link } from "react-router-dom";
// //import { AuthContext } from "../AuthContext";

// function Product({ id, title, image, price }) {
//   const [{ basket }, dispatch] = useStateValue();
//   const [cartCreated, setCartCreated] = useState(false);
//  // const { user } = useContext(AuthContext);

// const addToBasket = () => {
//     // Check if the user is logged in
//     const user_id = 1; // Replace with the user ID of the logged-in user
//     if (user_id) {
//         // Check if the cart has already been created
//         const cartExists = basket.some(item => item.cartId !== null);
//         if (!cartExists) {
//             // Create a new cart
//             fetch(`http://localhost:8090/cart/create?user_id=${user_id}`, {
//                 method: 'POST'
//             })
//             .then(response => response.json())
//             .then(data => {
//                 // Add the cart ID to the item
//                 dispatch({
//                     type: 'ADD_TO_BASKET',
//                     item: {
//                         id: id,
//                         title: title,
//                         image: image,
//                         price: price,
//                         cartId: data.id // Assuming the ID of the created cart is returned in the response
//                     }
//                 });
//                 // Add the item to the cart
//                 fetch(`http://localhost:8090/cart/add/items?cartId=${data.id}&productId=${id}&quantity=1`, {
//                     method: 'POST'
//                 })
//                 .then(response => console.log(response))
//                 .catch(error => console.error(error));
//             })
//             .catch(error => console.error(error));
//         } else {
//             // Add the item to the existing cart
//             const cartId = basket.find(item => item.cartId !== null).cartId;
//             fetch(`http://localhost:8090/cart/add/items?cartId=${cartId}&productId=${id}&quantity=1`, {
//                 method: 'POST'
//             })
//             .then(response => console.log(response))
//             .catch(error => console.error(error));
//         }
//     }
// };
// return (
//     <div className="product">
//       <div className="product-info">
//         <Link to={`/SingleProduct/${id}`}>
//           <p>{title}</p>
//           <p className="product-price">
//             <small>$</small>
//             <strong>{price}</strong>
//           </p>
//         </Link>
//       </div>
//       <img src={image} alt="pic"/>
//       <button1 onClick={addToBasket}>Add to Basket</button1>
//     </div>
//   );
// }

// export default Product;

// import React from "react";
// import './Product.css';
// import '../Home/Home.css';
// import {useStateValue} from '../StateProvider';
// import { Link } from "react-router-dom";
// import '../SingleProduct/SingleProduct'
// import products from '../data'


// function Product({id}){

//     const product = products.find((product) => product.id === id);

//     const {title, description, price , image} = product;


//     const [{basket}, dispatch] = useStateValue()
//     const addToBasket = () => {
//         dispatch({
//         type: 'ADD_TO_BASKET',
//         item: {
//             id: id,
//             title: title,
//             image: image,
//             price: price,
        
//         }
//     })
// } 
    
//     return(
//         <div className="product">
//             <div className="product-info">
//                 <Link to={`/SingleProduct/${id}`}><h3>{title}</h3>
//                 <p>{description}</p>
//                 <p className="product-price">
//                     <small>$</small>
//                     <strong>{price}</strong>
//                 </p></Link>
// {/*
//                 <div className="product-rating">
//                     {
//                         Array(rating)
//                         .fill()
//                         .map((_) => (
//                             <p>*</p>
//                         ))
//                     }

//                 </div>*/}

//             </div>
//             <img src={image} alt="pic"/>
//             <button1 onClick={addToBasket}>Add to Basket</button1>

//         </div>         

//     )
// }

// export default Product;