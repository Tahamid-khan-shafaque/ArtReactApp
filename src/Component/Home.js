import React from "react";
import  {NavLink } from 'react-router-dom';
import homeimg from "../Img/img1.jpg";
import '../Css/HomeAbout.css';

const Home=()=>{

    return (
        <>
     <div className="mainSection">
         <div className="contentBox">
             <h1>Learning made easy</h1>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quo facere porro eos deserunt vitae maiores praesentium assumenda aut neque.</p>
             <div className="btnBox">
                 <div className="btn">
                 <NavLink to="/about" className="readMore" >Read more</NavLink>
                 </div>
             </div>
         </div>
         <div className="imgContainer">
             <img src={homeimg} alt="" className="imgg" />
         </div>
     </div>
        </>
    )


}

export default Home;