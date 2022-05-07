import React from 'react';
import  './../../Style/StyleUserPage/Messeges.css';
import ChatArea from "./ChatArea";
import SendText from "./SendText"

function CurrentChat (){

    return (
        <div className = "current-chat">
            <div className = "current-chat-header">
                <div className = "profPic_pub_wrapper_big" >
                    <div className = "profPic_img_pub"></div>
                </div>
                <h4 className = "users_name"></h4>
            </div>
            <ChatArea />
            <SendText />
            </div>
    )
}

export default CurrentChat