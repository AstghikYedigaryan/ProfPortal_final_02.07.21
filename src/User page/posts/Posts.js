import React, { Fragment, useState } from 'react';
import "./../../Style/StyleUserPage/popup_post.css";
import { Posts_const } from "./../../constaat/constantPosts";
  


const Posts = ({ onClick, updateCoponent }) => {
   let post = {
            id: 0,
            name: "Astghik Edigaryan",
            title: "Incapsulation",
            // img: "https://miro.medium.com/max/3840/1*fBuojCESyN8ib8hJIrKWQw.jpeg",
            img: "https://i.postimg.cc/4NYN8Tzf/post-img.png",
            info: "",
            date:"2 Jule, 2021"
    }
    const [text, setTest] = useState("");
    const [obj, setObj] = useState ( null)

    const addPost = e =>{
        e.preventDefault();
        post["info"] = text;
        setTest("");
        setObj(post);
      
        Posts_const.unshift (post);
        console.log (Posts_const);
         updateCoponent()
    }

    return (

        <div className="posts">
            <div className="postField">
                <div className="profPic_wrapper">
                    <div className="profPic"></div>
                </div>
                {/* <form  className = "form_post" onSubmit={addPost}> */}
                    <input className = "form_post" value = {text} onChange = { e => { setTest( e.target.value);
                    }} className="createPost" type="text" placeholder="Start a post" />
                    <button className="post_btn"  onClick={addPost}>Post</button>
                {/* </form> */}
            </div>
            <div className="postIcons">
                <div className="attach">
                   
                <div className="postIcon_photo" onClick={onClick} ></div>
                    <span>Photo</span>
                </div>
                <div className="attach">
                    <div className="postIcon_video" onClick={onClick}></div>
                    <span>Video</span>
                </div>
                <div className="attach">
                    <div className="postIcon_event" onClick={onClick}></div>
                    <span>Event</span>
                </div>
            </div>

        </div>
    )
}


export default Posts;