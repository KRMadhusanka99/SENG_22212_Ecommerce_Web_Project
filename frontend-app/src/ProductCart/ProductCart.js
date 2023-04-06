import React from "react";
import './ProductCart.css';
<<<<<<< HEAD
import {useStateValue} from '../StateProvider';
=======
import {useStateValue} from '../StateProvider'
>>>>>>> main

function ProductCart({id,title,image,price,rating}){

    const [{basket} , dispatch] = useStateValue();

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return(
        <div className="productcart">
<<<<<<< HEAD
            <table bgcolor="#ecf0f1">
                <tbody>
                <tr><td className="sn"><div className='cart-ctd'>
                      <span className='cart-ctxt'>{id}</span>
                    </div></td>
                    <td className="pic"> <div className='cart-ctd'>
                        <img className="productcart-image" src={image} alt=""/>
                    </div></td>
                    <td className="title"> <div className='cart-ctd'>
                      <span className='cart-ctxt'>{title}</span>
                    </div></td>
                    <td><div className='cart-ctd'>
                      <span className='cart-ctxt'>{price}</span>
                    </div></td>
                    <td className="delete">
                    <div className='cart-ctd'>
                      <button type = "button" className='delete-btn' onClick={removeItem}>Delete</button>
                    </div>
                    </td></tr>
                </tbody>
            </table>
              
              
            {/* <img className="productcart-image" src={image} alt=""/>
            <div className="productcart-info">
                <p className="productcart-title">{title}</p>
                <p className="productcart-price">${price}</p> */}
=======
            <img className="productcart-image" src={image} alt=""/>
            <div className="productcart-info">
                <p className="productcart-title">{title}</p>
                <p className="productcart-price">${price}</p>
>>>>>>> main

           {/*} <div className="productcart-rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <span>*</span>
                    ))
                }
            </div>*/}
<<<<<<< HEAD
            {/* <div className="additem">
                
            <button onClick={removeItem}>Remove from the Cart</button>
            </div> */}
            <div className='cart-ctr py-4'>
                    
                    
                    

                    
      </div>
      </div>
=======
            <div className="additem">
                
            </div>
            <button onClick={removeItem}>Remove from the Cart</button>
            </div>
        </div>
>>>>>>> main
    )

}

export default ProductCart;