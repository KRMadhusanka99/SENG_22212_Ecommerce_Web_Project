import React, { useState, useEffect } from 'react';
import HomePic from '../Picture/home.png';
import Product from '../Product/Product';

function Home() {
  const [cheapestProducts, setCheapestProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8090/product/view')
      .then(response => response.json())
      .then(data => {
        //top 10 selling products
        const sortedProducts = data.sort((a, b) => a.price - b.price);
       
        const cheapestProducts = sortedProducts.slice(0, 10);
        setCheapestProducts(cheapestProducts);

        //top 10 latest products
        const latestSortedProducts = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        
        const latestProducts = latestSortedProducts.slice(0, 10);
        setLatestProducts(latestProducts);
      });
  }, []);

  return (
    <div className="home">
      <img className="home-image" src={HomePic} alt="logo" />

      <h2>Top Selling products</h2>
      {cheapestProducts.length > 0 && (
        <div className="home-row">
          {cheapestProducts.map(product => (
            <Product
              key={product.id}
              id={product.id}
              title={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      )}

      <h2>Latest products</h2>
      {latestProducts.length > 0 && (
        <div className="home-row">
          {latestProducts.map(product => (
            <Product
              key={product.id}
              id={product.id}
              title={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

// import React from "react";
// import './Home.css';
// import HomePic from '../Picture/home.png';
// import ProductPic from '../Picture/1.jfif';
// import ProductPic1 from '../Picture/4.jpg';
// import ProductPic2 from '../Picture/5.jfif';
// import ProductPic3 from '../Picture/2.jpg';
// import ProductPic4 from '../Picture/3.jpg';
// import ProductPic5 from '../Picture/6.jpg';
// import ProductPic6 from '../Picture/7.jpg';
// import ProductPic7 from '../Picture/8.jpg';
// import ProductPic8 from '../Picture/9.jpg';
// import Product from '../Product/Product'

// function Home(){
//     return(
//         <div className="home">
//             <img className="home-image"
//              src={HomePic}
//              alt="logo"/>

//             <div className="home-row">
//                 <Product
//                      id="1"

//                 />
//                 <Product
//                      id="2"

//                 />
//                 <Product
//                      id="3"

//                 />
//             </div>
//             <div className="home-row">
//                 <Product
//                      id="4"

//                 />
//                 <Product
//                      id="5"

//                 />
//                 <Product
//                      id="6"

//                 />
//             </div>
//             <div className="home-row">
//                 <Product
//                      id="7"

//                 />
//                 <Product
//                      id="8"

//                 />
//                 <Product
//                      id="9"

//                 />
//             </div>

//         </div>
     
//     )
// }

// export default Home;