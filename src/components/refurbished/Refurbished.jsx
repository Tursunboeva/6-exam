import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../refurbished/Refurbished.css';

import featured from '../../images/featured.png';
import svg from '../../images/svg.svg';
import star from '../../images/star.png';

const Refurbished = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then(response => setProducts(response.data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div className="container2">
        <div className="collection_products">
          <div className="title_wrapper">
            <div className="title">
              <span>Featured Event</span>
            </div>
            <div className="featured_box">
              <img src={featured} alt="Featured Event" />
              <p className='p'>Up to 60% off Apple tech</p>
              <small className='small'>Save on AirPods, iPhones, and more.</small>
            </div>
          </div>
          <div className="box">
            {products.map(product => (
              <div key={product.id} className="box_item">
                <img
                  className='box_images'
                  src={product.images[0]}
                  alt={product.title}
                />
                <p>{product.title}</p>
                <Link to={`/single/${product.id}`}>View Product</Link>
                
                <br />
                <p>{product.price}</p>
                <p>Was:<small className='price'>${product.discountPercentage}</small></p>
                <p className='rating'><img src={star} alt="Star" />({product.rating})</p>
                <p className='snos'>SPONSORED <img src={svg} alt="Sponsored" /></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Refurbished;

