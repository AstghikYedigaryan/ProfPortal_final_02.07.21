import React from "react";
import "./../../Style/StyleUserPage/popup_post.css"

const Popup_Post =  ({ onClose }) => {


        return (
            <div className = "popupWrapPost">
                <div className = "popup_post" >
                {/* <input type = "file" ></input> */}

                <input type = "text" classNamme = "createPost999"  placeholder = "Please choose a file to upload " />
                <button type = "submit" className = "post_btn2" >Choose file </button>
                <button type = "submit" className = "btn_upload" > Upload </button>
                    <span onClick={onClose}>x</span>
                </div>
            </div>
        )

}

export default Popup_Post;
