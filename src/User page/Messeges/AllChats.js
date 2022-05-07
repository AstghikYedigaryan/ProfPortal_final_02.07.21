import React, { useState } from 'react';
import  './../../Style/StyleUserPage/Messeges.css';
import { Chats_const } from '../../constaat/constantChats';
import ChatArea from "./ChatArea";
import SendText from "./SendText"

function AllChats () {
    
    let allChats = Chats_const.map((user) => {
    return (
            <div key = {user.id}>
                <div className = "messege" onClick = {() => {setIndex(user.id)} }>
                    <div className = "profPic_wrapper">
                        <div className = "profPic" style={{backgroundImage: `url(${user.img})`}}></div>
                    </div>
                    <h4 style = {{display: "inline-block", margin: "0.6em"}} >{user.name}</h4>
                </div>
            </div>
    )}
    )
    let [index, setIndex] = useState(0);
    return (
      <div className="chat_wrapper_i"> <div className = 'all-messeges'> {allChats}</div>
            <div className = "current-chat">
                <div className = "current-chat-header">
                    <div className = "profPic_pub_wrapper">
                        <div className = "profPic_img_pub" style={{backgroundImage: `url(${Chats_const[index].img})`}}></div>
                    </div>
                    <h4 className = "users_name"> {Chats_const[index].name} </h4>
                </div>
                <ChatArea />
                <SendText />
                </div>
                </div> 
        )
}

export default AllChats