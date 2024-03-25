import ContactForm from "./ContactForm";
import './Contact.css';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () =>{
    useEffect(() => {
        AOS.init();
      }, [])
      AOS.init({
        duration: 3000,
      })

    return(
        <div>
            <div className="bg-image">
            <h2 data-aos="fade-up" className="title-contact">
              STAINLESS STEEL 14||18 K GOLD PLATED JEWELRY
            </h2>
            <p>WATERPROOF || TARNISH FREE || NICKEL FREE || HYPOALLERGENIC</p>
            </div>
            <h2 className="contact" data-aos="fade-up">Contact with us</h2>
      
        <div>
            
        </div>
        <ContactForm/>
        
        
        
        
        </div>
    )
}
export default Contact;