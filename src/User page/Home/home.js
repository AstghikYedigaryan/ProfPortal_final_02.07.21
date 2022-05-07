import React from "react";
import { useState } from "react";
import ADS from "../ADS";
import UserInfo from "../Info";
import NewsFeed from "../News_feed";
import Popup_Post from "../posts/Popup_post";
import Posts from "../posts/Posts";

const Home = () => {
    let i = 0;
    const [isOpen, setIsOpen] = useState(false);
    const [update, setUpdate] = useState(i);


    const onClose = () => {
        setIsOpen(false);
    }

    const openPopup = () => {
        setIsOpen(true);
    }

const updateCoponent = () => {
    i ++
    setUpdate(i)
}

    return (


        <div className="wrap_user_main">
            {isOpen && <Popup_Post onClose={onClose} />}

            <UserInfo />
            <div className="wraper_post_news">
                <Posts onClick={openPopup }  updateCoponent = {updateCoponent} />
                <NewsFeed  update = {update}/>

            </div>
            <ADS />

        </div>
    )

}

export default Home;
