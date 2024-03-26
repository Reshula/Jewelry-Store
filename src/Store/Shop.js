import { useState, useEffect } from "react";
import { data } from "../data";
import Jewelery from "./Jewelery";
import Button from "./Button";
import './Store.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Shop(){
    const [jewelery, setJewelery] = useState(data);
  
    

    useEffect(() => {
        AOS.init();
      }, [])
      AOS.init({
        duration: 3000,
      })

    const choosenJew = (jewName) => {
        const newJew = data.filter(element =>
            element.jewName === jewName)
            setJewelery(newJew)
    }

    return(
        <div className="containerShop">
            <h1  data-aos="flip-right" className="titleShop">Shop by category</h1>
            <Button filteredJew={ choosenJew}/>
            <Jewelery jewelery= {jewelery}/>
        </div>
    )
}
export default Shop;