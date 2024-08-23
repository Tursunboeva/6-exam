import '../lists1/Lists1.css'

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import strelka from '../../images/strelka.svg'

const Lists = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then(response => setProducts(response.data.products)) 
      .catch(error => console.error('Error fetching data:', error)); 
  }, []);

  return (
    <div className="container">
      <div className="list_wrapper">
       <div className="list_products">
       {products.slice(20, 27).map(product => (
          <div key={product.id} className="product_item"> 
            <img className='products_img' src={product.images} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}

       </div>
        <div className="all_list">
          <span>Score these trending kicks</span>
          <span>See all <img className='all' src={strelka} alt="" /></span>
        </div>
      </div>
    </div>
  );
};

export default Lists;
