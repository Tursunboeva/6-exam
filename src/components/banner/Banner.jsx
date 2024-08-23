import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../banner/Banner.css';

import strelka from '../../images/strelka.svg';
import pseudo from '../../images/pseudo.svg';

const Banner = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios(`https://api.escuelajs.co/api/v1/products`)
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);


  const displayedProducts = products.slice(0, 3);

  return (
    <div>
      <div className="container">
        <div className="link_banner">
          <ul>
            <li>Home</li>
            <li className='pseudo'><img src={pseudo} alt="" />Saved</li>
            <li>Motors</li>
            <li>Electronics</li>
            <li>Collectibles</li>
            <li>Home & Garden</li>
            <li>Fashion</li>
            <li>Toys</li>
            <li>Sporting Goods</li>
            <li>Business & Industrial</li>
            <li>Jewelry & Watches</li>
            <li>eBay Live</li>
            <li><NavLink className='link' to="/refurbished">Refurbished</NavLink></li>
          </ul>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="banner_wrapper">
            <div className="banner_title">
              <h2>Super savings at the Brand Outlet</h2>
              <p>Up to 60% off the brands you love.</p>
              <button>Shop now <img src={strelka} alt="" /></button>
            </div>
            <div className="banner_products">
              {displayedProducts.length > 0 && displayedProducts.map(product => (
                <div key={product.id}>
                   <b>{product.title.slice(0, 15)} <img src={strelka} alt="" /></b>
                  <img src={product.images[0]} alt={product.title} />
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
