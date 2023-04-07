import React from "react";
import './SingleProduct.css';
import '../Home/Home.css';
import {useStateValue} from '../StateProvider';
import { Link, useParams } from 'react-router-dom';
import products from "../data";


function SingleProduct(){

    const { id } = useParams();

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
        <div className="singleproduct">
            <div className="image">
                <div className="Bigimage">
                    <img src={image} alt="pic"/>
                </div>
                <div className="smallimage">
                    <img src={image} alt="pic"/>
                    <img src={image} alt="pic"/>
                    <img src={image} alt="pic"/>
                </div>
            </div>
            <div className="product-info">
                <p className="title1">{title}</p>
                <p className="description">{description}</p>
                <p className="price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button2 onClick={addToBasket}>Add to Basket</button2>
                <button1><Link to="/checkout">Buy now</Link></button1>
            </div>
            
            

        </div>         


    )
}

export default SingleProduct;