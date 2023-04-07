import React from "react";
import './CategoryPage.css';
import ProductPic from '../Picture/1.jfif';
import { useParams } from "react-router-dom";
import products from '../data'
import Product from "../Product/Product";

function categoryPage(){
    const {category} = useParams();
    const filteredProducts = products.filter(product => product.category === category);
    return(

        <div className="home1">
            <h1>{category}</h1>
            <div className="home-row">
            {filteredProducts.map(product => (
                    <Product
                     id={product.id}
                     title={product.title}
                     price={product.price}
                     image={product.image}

                />
                ))}
                </div>
        </div>
     
    )
}

export default categoryPage;