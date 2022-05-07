import React from "react";
import Search from "../../Search/Search";
import HeaderButton from "./HeaderButton";
import Logo from "./Img";
import Navigation from "./Navigation";




const HeaderUser = ({MeClass, HomeClass, NotificationClass, MessagesClass, LoggedOut, goHome, goMessages, goNotification, goMe }) => {

    return (
        <nav className="app-header">
            <Logo />
            <div className="search_wrap">
                <Search />
            </div>
            <ul>
                <Navigation href={'#'} bool = {HomeClass} name={"Home"} goPage={goHome} src={"./../../../img/home.png"} />
                <Navigation href={'#'} bool = {MessagesClass} name={"Messages"} goPage={goMessages} src={"./../../../img/messages.png"} />
                <Navigation href={'#'} bool ={NotificationClass}   name={"Notifications"} goPage={goNotification} src={"./../../../img/notifications.png"} />
                <Navigation href={'#'} bool = {MeClass} name={"Me"} goPage={goMe} src={"./../../../img/user.png"} />
            </ul>
            <HeaderButton LoggedOut={LoggedOut} />
        </nav>
    )
}

export default HeaderUser;