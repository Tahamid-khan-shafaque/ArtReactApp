import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../Css/FooterStyle.css';
import '../Css/ServiceStyle.css';


const Footer=()=>{

    return (
        <>
       <footer>
           <div className="container container-flex">
               <div className="icons">
                     < TwitterIcon className="icon"/>
                     < InstagramIcon className="icon"/>
                     <LinkedInIcon className="icon"/>

               </div>
               <div className="line">
                   <hr />
                   <hr />
               </div>
               <div className="copyright">
                   <p>all rights reserved</p>
                   <p>made with love</p>
               </div>
           </div>
       </footer>
        </>
    )


}

export default Footer;