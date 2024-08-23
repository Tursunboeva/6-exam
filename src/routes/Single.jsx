import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import "../routes/Single.css";

const Single = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios(`https://dummyjson.com/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="title_singl">
          <h3>EXTRA <span>$10</span> OFF 3+ ITEMS WITH CODE <span>10OFF2023TECH</span></h3>
          <a href="#">See all eligible items and terms</a>
        </div>
        <div className="single_wrapper">
          <div className="products-container">
            <div>
              <img src={product.images[0]} alt={product.title} className="single_img" />
            </div>
          </div>
          <div className="single_wiki">
            <div className="product-details">
              <h1>{product.title}</h1>
              <p><span className="condition">Open box</span></p>
              <p className="description">{product.description} <a href="#">Read more</a></p>

              <div className="details">
                <div className="detail-item">
                  <label>Category:</label>
                  <input type="text" value={product.category} readOnly />
                </div>
                <div className="detail-item">
                  <label>Price:</label>
                  <input type="text" value={`$${product.price}`} readOnly />
                </div>
                <div className="detail-item">
                  <label>Stock:</label>
                  <input type="text" value={product.stock} readOnly />
                </div>
                <div className="detail-item">
                  <label>Brand:</label>
                  <input type="text" value={product.brand} readOnly />
                </div>
              </div>

              <p className="quantity">
                Quantity: <span className="last-one">Last One</span> / <span className="sold">86 sold</span>
              </p>
            </div>
            <div class="product-buttons">
              <p>
                <strong>Price:</strong> <span class="price">${product.price}</span>
              </p>
              <button class="btn buy-now">Buy It Now</button>
              <button class="btn add-to-cart">Add to cart</button>
              <button class="btn watchlist">♡ Add to Watchlist</button>
            </div>



          </div>
        </div>
      </div>
    </>
  );
}

export default Single;
