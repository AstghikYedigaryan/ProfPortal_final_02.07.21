import React from "react";

class Navigation extends React.Component {
    render() {
        return (

            <li className="nav">
                <a className= "nav_a" href={this.props.href} onClick={this.props.goPage} >
                    <img src={this.props.src} alt="nav img" className="nav_img "></img>
                    <br>
                    </br>
                    <span className={` ${this.props.bool ?  "activNav" : null} `}>{this.props.name}</span>
                </a>
            </li>
        )
    }
}

export default Navigation;
