import React from "react";
import './Product.css';
import '../Home/Home.css';
import {useStateValue} from '../StateProvider';
<<<<<<< HEAD
import { Link } from "react-router-dom";
import '../SingleProduct/SingleProduct'
=======
>>>>>>> main


function Product({id,title,image,price,rating}){
    
    const [{basket}, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
        
        }
    })
} 
    
    return(
        <div className="product">
            <div className="product-info">
<<<<<<< HEAD
                <Link to={`/SingleProduct/${id}`}><p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p></Link>
=======
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
>>>>>>> main
{/*
                <div className="product-rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>*</p>
                        ))
                    }

                </div>*/}

            </div>
            <img src={image} alt="pic"/>
            <button1 onClick={addToBasket}>Add to Basket</button1>

        </div>         

    )
}

export default Product;