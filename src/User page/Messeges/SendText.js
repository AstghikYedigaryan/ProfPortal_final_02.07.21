import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sendMsg } from "../../action/MsgAction"


function SendText ({ addMsg }) {
    const [msg, setMsg] = useState("");

    const sendInputedText = e => {
        setMsg(e.target.value);
    }

    const sendMsg = e => {
        e.preventDefault();
        if (msg !== "") {
            e.preventDefault();
            // collbackFunction, store.dispatch
            (sendMsg(msg));

            setMsg("")
        }
    }

    return (
        <form onSubmit={sendMsg} className = 'input-field'> 
            <input className = 'createPost1' type = "text" placeholder = 'Write a messege...' value={msg} onChange={sendInputedText} />
            <button type="submit" className = 'post_btn1'>Send</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        sendMsg
    },
        dispatch
    )

}

export default connect(null, mapDispatchToProps)(SendText);
