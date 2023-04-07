
import React from "react";
import './Product.css';
import '../Home/Home.css';
import {useStateValue} from '../StateProvider';
import { Link } from "react-router-dom";
import '../SingleProduct/SingleProduct'


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
                <Link to={`/SingleProduct/${id}`}><p>{title}</p>
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
// import React from "react";
// import './Product.css';
// import '../Home/Home.css';
// import {useStateValue} from '../StateProvider';


// function Product({id,title,image,price,rating}){
    
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
//                 <p>{title}</p>
//                 <p className="product-price">
//                     <small>Rs.</small>
//                     <strong>{price}</strong>
//                 </p>
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