import '../footer/Footer.css'

import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'

const Footer = () => {
    return (
      <footer>
        <div className="container">
          <div className="footer_wrapper">
            <ul>
              <li><b>Buy</b></li>
              <li>Registration</li>
              <li>eBay Money Back Guarantee</li>
              <li>Bidding & buying help</li>
              <li>Stores</li>
              <li>eBay for Charity</li>
              <li>Charity Shop</li>
              <li>Seasonal Sales and events</li>
            </ul>
            <ul>
              <li><b>Sell</b></li>
              <li>Start selling</li>
              <li> How to sell</li>
              <li>Business sellers</li>
              <li>Affiliates</li>
              <li><b>Tools & apps</b></li>
              <li>Developers</li>
              <li>Security center</li>
              <li>Site map</li>
            </ul>
            <ul>
              <li><b>Stay connected</b></li>
              <li ><a href="" className='a'><img src={facebook} alt="" />Facebook</a></li>
              <li ><a href="" className='a'><img src={twitter} alt="" />Twitter</a></li>
            </ul>
            <ul>
              <li><b>About eBay</b></li>
              <li>Company info</li>
              <li>News</li>
              <li>Investors</li>
              <li>Careers</li>
              <li>Diversity & Inclusion</li>
              <li>Global Impact</li>
              <li>Government relations</li>
              <li>Advertise with us</li>
              <li>Policies</li>
              <li>Verified Rights Owner (VeRO) Program</li>
              <li>eCI Licenses</li>
            </ul>
            <ul>
              <li><b>Help & Contact</b></li>
              <li>Seller Center</li>
              <li>Contact Us</li>
              <li>eBay Returns</li>
              <li><b>Community</b></li>
              <li>Announcements</li>
              <li>eBay Community</li>
              <li>eBay for Business Podcast</li>
              <li><b>eBay Sites</b></li>
            </ul>
          </div>
        </div>
        
      </footer>
    )
  }
  
  export default Footer