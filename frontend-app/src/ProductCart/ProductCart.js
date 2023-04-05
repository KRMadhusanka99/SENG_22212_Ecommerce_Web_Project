import React from "react";
import './ProductCart.css';
import {useStateValue} from '../StateProvider';

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

           {/*} <div className="productcart-rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <span>*</span>
                    ))
                }
            </div>*/}
            {/* <div className="additem">
                
            <button onClick={removeItem}>Remove from the Cart</button>
            </div> */}
            <div className='cart-ctr py-4'>
                    
                    
                    

                    
      </div>
      </div>
    )

}

export default ProductCart;