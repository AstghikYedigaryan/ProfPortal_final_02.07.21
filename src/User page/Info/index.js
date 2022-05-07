import isPlainObject from "react-redux/lib/utils/isPlainObject";
import React from "react";


const UserInfo = () => {
    return (
        <div className="aboutme_wrapper">
            <div className="profPic_info_wrapper">
                <div className="profPic"></div>
            </div>
            <h3 className="welcome">Welcome, Astghik</h3>
            <h4 className="web">Frontend developer</h4>
            <div className="p_span">
                <p className="connection" >Connection</p>
                <span>117</span>
            </div>
            <p className="group">Groups</p>
            <p className="group">Events</p>
            <p className="group">Who visited your profile</p>
        <img  src={"./../../../img/User_info.png"} />
        </div>
    )
}



export default UserInfo;
