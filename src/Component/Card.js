import React from "react";
import homeimg from "../Img/img1.jpg";
import  {NavLink } from 'react-router-dom';

const Card=()=>{

    return (
        <>
        <div className="card">
              <h2>web development</h2>
              <img src={homeimg} alt="service1" className="img3"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, assumenda?</p>
              <div className="btnBox">
                 <div className="btn">
                 <NavLink to="/about" className="readMore" >Read more</NavLink>
                 </div>
             </div>
          </div>
        </>
    )


}

export default Card;