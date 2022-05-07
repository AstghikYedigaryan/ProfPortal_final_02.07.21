import React from 'react';
import { NotificationsFeed_const } from '../../constaat/constantNotificationsFeed';


function NewNotifications () {
    let all_notifications_posts = NotificationsFeed_const.map((notify) => {
   return (
       <div className="notifications_wrapper" key={notify.id}>
          <div className = "notifications_img_div"> 
            <div className = "notifications_img_img">
                <img  src = {notify.img}></img>
            </div>
          </div> 
          <div className="notifications_title_info"> 
              <div className="notifications_title">
                    {notify.title}
              </div>
              <div className="notifications_info">
                    {notify.text}
              </div>
          </div>
       </div>
   )
})
    return (
        <div className="all_notifications_posts">{all_notifications_posts}</div>
    )
}


export default NewNotifications;