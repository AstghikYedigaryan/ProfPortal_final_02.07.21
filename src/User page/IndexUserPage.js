import React from "react";
import { useState } from "react";
import './../Style/StyleUserPage/navigation.css';
import './../Style/StyleUserPage/info.css';
import './../Style/StyleUserPage/posts.css';
import "./../Style/StyleUserPage/my.css";
import UserInfo from './Info';
import HeaderUser from "./Header user";
import Notifications from "./Notifications_feed/notifications_index";
import Messeges from "./Messeges"
import MyPage from "./My";
import Home from "./Home/home";


function UserPage({ LoggedOut }) {
  const [home, setHome] = useState(true);
  const [messages, setMessages] = useState(false);
  const [notification, setNotification] = useState(false);
  const [me, setMe] = useState(false);

  const [homeClass, setHomeClass] = useState(true);
  const [messagesClass, setMessagesClass] = useState(false);
  const [notificationClass, setNotificationClass] = useState(false);
  const [meClass, setMeClass] = useState(false);

  const goHome = () => {
    setHome(true);
    setMessages(false);
    setNotification(false);
    setMe(false);

    setHomeClass(true);
    setMessagesClass(false);
    setNotificationClass(false);
    setMeClass(false);
    console.log ()
  }

  const goMessages = () => {
    setHome(false);
    setMessages(true);
    setNotification(false);
    setMe(false);

    setHomeClass(false);
    setMessagesClass(true);
    setNotificationClass(false);
    setMeClass(false)
  }

  const goNotification = () => {
    setHome(false);
    setMessages(false);
    setNotification(true);
    setMe(false);

    setHomeClass(false);
    setMessagesClass(false);
    setNotificationClass(true);
    setMeClass(false)
  }

  const goMe = () => {
    setHome(false);
    setMessages(false);
    setNotification(false);
    setMe(true);

    setHomeClass(false);
    setMessagesClass(false);
    setNotificationClass(false);
    setMeClass(true)
  }


  return (
    <div className="App">
      <HeaderUser
        MeClass={meClass}
        NotificationClass={notificationClass}
        HomeClass={homeClass}
        MessagesClass={messagesClass}
        LoggedOut={LoggedOut}
        goHome={goHome}
        goMessages={goMessages}
        goNotification={goNotification}
        goMe={goMe} />
      {/* go home page */}
      {home && <Home />}

      {/* go messages page */}
      {messages && <Messeges />}

      {/* go notification page */}
      {notification && <Notifications />}

      {/* go me page */}
      {me && <MyPage />}
    </div>
  );
}

export default UserPage;
