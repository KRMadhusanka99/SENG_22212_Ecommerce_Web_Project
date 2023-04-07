import React from "react";
import './Product.css';
import '../Home/Home.css';
import {useStateValue} from '../StateProvider';
import { Link } from "react-router-dom";
import '../SingleProduct/SingleProduct'
import products from '../data'


function Product({id}){

    const product = products.find((product) => product.id === id);

    const {title, description, price , image} = product;


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
                <Link to={`/SingleProduct/${id}`}><h3>{title}</h3>
                <p>{description}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p></Link>
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