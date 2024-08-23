import '../lists2/Lists2.css'

import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/ebay2.svg'
import strelka from '../../images/strelka.svg'


const Lists2 = () => {
    return (
      <div>
        <div className="container">
            <div className="featured_wrapper">
                 <div className="featured_title">
                    <small>Featured</small>
                    <img className='img3' src={img3} alt="" />
                    <p>Deals made easy all year long.</p>
                    <span>Free shipping. Best prices.</span>
                    <button>Get your thing <img src={strelka}alt="" /></button>
                 </div>
                 <div className="featured_img">
                    <img className='img1' src={img1} alt="" />
                    <img className='img2' src={img2} alt="" />
                 </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Lists2