import React from "react";
import  {NavLink } from 'react-router-dom';
import logo from "../Img/img2.jpg";
const About=()=>{

    return (
        <>
         <div className="mainSection">
         <div className="contentBox">
             <h1>About us</h1>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quo facere porro eos deserunt vitae maiores praesentium assumenda aut neque.</p>
             <div className="btnBox">
                 <div className="btn">
                 <NavLink to="/about" className="readMore" >Know more</NavLink>
                 </div>
             </div>
         </div>
         <div className="imgContainer">
             <img src={logo} alt="" className="imgg" />
         </div>
     </div>
        </>
    )


}

export default About;