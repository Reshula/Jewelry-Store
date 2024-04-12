
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Heart from "react-animated-heart";


function Jewelery({jewelery}){
    const [likes, setLikes] = useState(() =>{
    const likes = localStorage.getItem("likes");
    return likes ? JSON.parse(likes) : {};
    });

    const putLike = (id) => {
        setLikes((prevLikes) => ({
          ...prevLikes,
          [id]: !prevLikes[id]
          
        }));
      };
      useEffect(() =>{
        localStorage.setItem("likes", JSON.stringify(likes))
      }, [likes])

    return(

        <div className="containerJewelery">
            {jewelery.map ((item) =>{
                const {id,  info,  image}= item;
                

            return(
                  <div   key={id}>  
                      <div className="shop">
                      <Link to={`/shop/${item.title}`}>
                           <img className="imageShop" src={image} alt="jewelery" />
                           <Heart isClick={likes[id]} onClick={() => putLike(id)} />
                      </Link>
     
                        <div className="info">
                        <p>{info}</p>
                       
                        </div>     
                      </div>          
                  </div>
            )        
    
        })}
            
        </div>
    )
             
}
export default Jewelery;