import React from 'react';
import './SearchProduct.css'
import { useParams } from 'react-router-dom';
import products from '../data'
import Product from '../Product/Product';

function SearchProduct() {
  const { searchQuery } = useParams();
//   const filteredProducts = products.filter(product => product.category === searchQuery);
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase()));


  return (
    <div className='frame'>
      <h1>Search Results for: {searchQuery}</h1>
      {filteredProducts.length === 0 ? (
        <p>No results found for {searchQuery}.</p>
      ) : (
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
      )}
    </div>
  );
}

export default SearchProduct;
