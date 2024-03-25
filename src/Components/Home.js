import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import imageTitle from '../Photo/titlePic.jpg'



const Home = () =>{
  useEffect(() => {
    AOS.init();
  }, [])
  AOS.init({
    duration: 3000,
  })
    return(
        <div>
          <div className="containerOne">
            <img data-aos="zoom-in-up" src={imageTitle} alt="raring" width='1510px'/> 
     
          </div>
          <div  className='icon-block-container'>
          <div 
          className='icon-block'>
          <div data-aos="fade-up"
            className='icon-container-one'> 
            <div
              className='icon'>
               <span><p>Delelivery</p></span>
            </div>
          </div>
          </div>
     
        <div 
          className='icon-block'>
          <div data-aos="fade-down"
            className='icon-container-two'>
            <div
              className='icon'>
                 <span><p>Quality</p></span>
            </div>
          </div>
        </div>
  
        <div 
          className='icon-block'>
          <div data-aos="fade-up"
            className='icon-container-three'>
            <div
              className='icon'>
                 <span><p>Payment</p></span>
            </div>
          </div>
        </div>
        <div 
          className='icon-block'>
          <div data-aos="fade-down"
            className='icon-container-four'>
            <div
              className='icon'>
                 <span><p>Return</p></span>
            </div>
          </div>
        </div>
        
  
      </div>

        </div>
    )
}
export default Home;