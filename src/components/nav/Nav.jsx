import '../nav/Nav.css';

import { NavLink } from 'react-router-dom';

import div from '../../images/div.svg';
import i from '../../images/i.svg';
import image from '../../images/image.svg';
import ebay from '../../images/ebay.svg';

const Nav = () => {
  return (
    <div>
      <div className="container">
        <div className="nav_links">
          <ul>
            <li>
              Hi! <NavLink to="/login">Sign in</NavLink> or <NavLink to="/register">register</NavLink>
            </li>
            <li>Daily Deals</li>
            <li>Brand Outlet</li>
            <li>Help & Contact</li>
          </ul>
          <ul>
            <li>Sell</li>
            <li>
              Watchlist <img src={i} alt="" />
            </li>
            <li>
              My eBay <img src={i} alt="" />
            </li>
            <li>
              <img src={image} alt="" />
            </li>
            <li>
              <img src={div} alt="" />
            </li>
          </ul>
        </div>
        <div className="nav_search">
          <img src={ebay} alt="" />
          <select className="search-select">
              <option value="all">Shop by category</option>
            </select>
          <div className="search-container">
            <div className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M18.5 10.5A8 8 0 1 1 10.5 2.5a8 8 0 0 1 8 8z" />
              </svg>
            </div>
            <input type="text" placeholder="Search for anything" className="search-input" />
            <div className="search_box">
            <select className="search-select">
              <option value="all">All Categories</option>
            </select>
            <button className="search-button">Search</button>
            <p>Advanced</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Nav;
