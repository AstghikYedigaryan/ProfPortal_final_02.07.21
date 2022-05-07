import React from "react";

const UserInfo = () => {


    return (
        <div className="left_column">
            <div className="profile-background-image"> </div>
            {/* foto user */}
            <div className = "photo_parent">
                <div className="profPic_wrapper_me_section">
                    <div className="profPic_me_section"></div>
                </div>
             </div>
       

            <div className="user_data">
                <h3>Astghik Edigaryan</h3>
                <p>Frontend developer</p>
                <span>Armenia Erevan</span>
            </div>
            <div className="education_wrapper">

                <h1>Education:</h1>
                <div className = "education">
                    <h4>The Institute of Economic and Business; Russian-Armenian (Slavonic) University</h4>
                    <p>Master's degree, Financial Economy</p>
                    <span>2012-2014</span>
                </div>
                <div className = "education">
                    <h4>Russian-Armenian (Slavonic) University</h4>
                    <p>Bachelor's degreeСпециализацияEconomics</p>
                    <span>2008-1012</span>
                </div>

                
                <h1>Work experience:</h1>
                <div className = "education">
                    <h4>Pan-Armenian Association of Architects and Engineers NGO</h4>
                    <p>Administrative Assistant</p>
                    <span>4 Tigran Mets Ave., Yerevan, Armenia</span>
                </div>
            </div>



        </div>
    )

}

export default UserInfo;
