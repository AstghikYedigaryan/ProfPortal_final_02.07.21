import React from "react";
import {useState} from 'react';
import { Posts_const } from "../../constaat/constantPosts";
import TextLess from "./LessText";
import "./../../Style/Search.css"


function News () {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    let countLikes =  () => {
        setLikes(likes + 1);
    }

    let countDislikes =  () => {
        setDislikes(dislikes + 1);
    }

    let all_posts = Posts_const.map((post) => {
    return (
        <div className = "publication" key = {post.id}>
            <div className = "publisher">
                <div className = "profPic_pub_wrapper">
                    <div className = "profPic_img_pub" style = {{background: `url(${post.pic})`, backgroundSize: "cover" }}></div>
                </div>
                <h4 className = "users_name">{post.name}</h4>
                {/* <p className = "users_info">{post.title}</p> */}
            </div>
            <p className = "post_date">{post.date}</p>
            <p className = "textField"><TextLess text = {post.info} /></p>
            <div className = "postMedia">
                <img src = {post.img} alt = {post.name}></img>
            </div>
            <div className = "reactions_wrapper">
                <div className = "reactions_icons">
                    <img className = "reaction" src = {"./../../../img/like.png"} alt = "like" 
                    onClick = {countLikes}/><span>{likes}</span>
                    <img className = "reaction" src = {"./../../../img/dislike.png"} alt = "dislike" 
                    onClick = {countDislikes}/><span>{dislikes}</span>
                    <img className = "reaction" src = {"./../../../img/comment.png"} alt = "comment" />
                </div>
            </div>
            <input className = "createPost1" placeholder = "Add a comment..."></input>
            <button className = "post_btn1">Add</button>
            
        </div>
    )
})
        return (
            <div className="all_posts">
                {all_posts}
            </div>
        )
}


export default News;
