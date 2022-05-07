import React from "react";

const HeaderButton = ({LoggedOut}) => {
    return (
        <div className = "headerButton_out">
            <div><a href = "#" onClick={() => LoggedOut()}>Sign Out</a></div>
        </div>
    )
}

export default HeaderButton