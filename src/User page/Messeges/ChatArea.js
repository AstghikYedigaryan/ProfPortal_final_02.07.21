import { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeMsg } from "./../../action/MsgAction"


class ChatArea extends Component {
        
render () {
    
    return (
                
        <div className="chat-field" >
                <p class="chat_Astghik">Hi, Tatev</p>
                <p class="chat_Tatev">Hello, Astghik</p>
                <p class="chat_Astghik">How are you?</p>
                <p class="chat_Tatev">Fine. How are you doing?</p>
                <p class="chat_Astghik">I have been working a lot lately and need a break</p>
                <p class="chat_Tatev">Yes, I have been working hard lately too.</p>
                <p class="chat_Astghik">Do you know if she went to the mall already? I was supposed to meet her there.</p>
                <p class="chat_Tatev">Yes, she just left</p>
                <p class="chat_Astghik">Ok. Good bye</p>
                <p class="chat_Tatev">Bye Astghik</p>
            {/* {console.log (this.props.msg)}
            {
                this.props.msg.map(msg => {
                    console.log (msg)
                    return (
                        <div  key={msg.id} className = "msg" >
                            <div className="delete_msg" onClick = {() => this.props.removeMsg(msg.id)}>X</div>
                                    <p> {msg.msg} </p>
                            </div>
                    )
                })
            } */}
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        msg: state.msg,
        // state
    }
}

const mapDispatchToProps = dispatch => {
    return  bindActionCreators ({
        removeMsg,
    }, 
    dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);
