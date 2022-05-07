// import HeaderUser from "./Header notification";
import React from "react";
import NotificationInfo from '../Info_notification';
import NotificationsFeed from './News'

import ADS from "../ADS"



const Notifications = () => {
    return (

        <div className="wrap_user_main">
         

            <NotificationInfo /> 
            <div className="wrap_user_main_feed">
            <NotificationsFeed />
            </div>
        <ADS />
        </div>
    )
}


export default Notifications;
