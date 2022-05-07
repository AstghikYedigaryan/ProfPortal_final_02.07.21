import React from 'react';
import './../../Style/StyleUserPage/Messeges.css'
import AllChats from './AllChats';
import CurrentChat from './CurrentChat.js'
import Premium from './Premium';

function Messeges () {
    return (
        <div className = "messeges">
            < AllChats />
            {/* < CurrentChat /> */}
            < Premium />            
        </div>
    )
}

export default Messeges