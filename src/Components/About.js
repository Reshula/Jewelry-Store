import { useState } from 'react';
import picAbout from '../Photo/contact-pic.jpg'
import '../App.css'

const About = () =>{
    const par ="Emphasize your personality with help of jewelery made especially for you.Our desingners will develop a decoration  that will  perfectly complement your image And the jewelery will repeat exactly the idea agreed with you from pure gold.S.QSSIM is a high quality, durable jewelry brand with trendy designs.All jewelry is made from gold plated or rhodium plated jewelry fittings and is made to order.Every piece of jewelry in our brand has come a long way to meet you.."
    const [showMore, setShowMore] = useState(false)
    return(
        <div>
      
            <h1 className='titleAbout'>Custom jewelery</h1>
            <div className='container-about'>
            <p className="parAbout">{showMore ? par : par.substring(0,194) + "....."}
            <button className='btnPar' onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
            </p>
            <div>
           <img className='image-about' src={picAbout} alt="ring" width="350px"/>
           </div>
            </div>
            <div className='titleAbout'>
            <h2 >
              STAINLESS STEEL 14||18 K GOLD PLATED JEWELRY
            </h2>
            <p >WATERPROOF || TARNISH FREE || NICKEL FREE || HYPOALLERGENIC</p>
            </div>
 
        </div>
    )
}
export default About;