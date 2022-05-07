import React from "react";

const Advertising = ( { src, COMPANI, HREF }) => {
     return (
         <div className = "advertising">

    <a href = {HREF} > <img src = { src } className = "advertising_img" alt =  {COMPANI} /> 
   {COMPANI}
    </a>

         </div>

     )
 }

 export default Advertising;
