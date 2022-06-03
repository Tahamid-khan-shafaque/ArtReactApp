import React from "react";
import '../Css/ContactStyle.css';
import  {NavLink } from 'react-router-dom';
const Contact=()=>{

    return (
        <>
        <h3>Contact page</h3>
        <form className="contact">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter your name" />
            </div>

            <div>
                <label htmlFor="name">Email</label>
                <input type="email" placeholder="Enter your email" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your password" />
            </div>

            <div>
                <label htmlFor="mobile">Mobile</label>
                <input type="text" placeholder="Enter your mobile" />
            </div>
            <div className="btnBox">
                 <div className="btn">
                 <NavLink to="/about" className="readMore" >submit</NavLink>
                 </div>
             </div>
        </form>
        </>
    )


}

export default Contact;