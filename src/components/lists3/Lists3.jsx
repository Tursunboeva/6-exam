import '../lists3/Lists3.css'

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import strelka from '../../images/strelka.svg'

const Lists3 = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios('https://dummyjson.com/products')
            .then(response => setProducts(response.data.products))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>

            <div className="container">
                <div className="list_wrapper">
                <div className="all_list">
                        <span>Today's Deals – All With Free Shipping</span>
                        <span>See all <img className='all' src={strelka} alt="" /></span>
                    </div>
                    <div className="list_products">
                        {products.slice(20, 25).map(product => (
                            <div key={product.id} className="product_item">
                                <img className='products_images' src={product.images} alt={product.title} />
                                <p >${product.price}</p>
                                <p className='price'>${product.discountPercentage}</p><p> 50% off</p>
                            </div>
                        ))}

                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Lists3