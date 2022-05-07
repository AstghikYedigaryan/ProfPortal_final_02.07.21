import React, { useState } from 'react';
import { UserInfo_const } from '../../constaat/constantUserInfo';
import "./../../Style/FormStyles.css";

const RightSide = () => {
    
    let friends_list = UserInfo_const.map((friends) => {
        return (
            <div key={friends.id} className="wrapp_Id">
                <div className="img_name">
                    <div className="profPic_me_wrapper" >
                        <div className="profPic_me" style={{ backgroundImage: `url(${friends.img})` }}></div>
                    </div>
                    <div className="info_me_wrapper">
                        <h4> {friends.name}</h4>
                        <p>{friends.prof}</p>
                    </div>
                </div>
                <button className="btn_view_profile" onClick={() => { setIndex(friends.id) }}>View profile</button>
            </div>

        )
    })

    let [index, setIndex] = useState(0);


    return (
        <div className="wrapper_my">

            <div className="left_column">
                <div className="profile-background-image">
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhG3oXZJMdiHKLGc450PHjJV-fQdMyx95yQ&usqp=CAU" alt="profile-background-image" /> */}
                </div>
                {/* foto user */}
                <div className="profPic_wrapper">
                    <div className="profPic" style={{ backgroundImage: `url(${UserInfo_const[index].img})` }}></div>
                </div>

                {/* Scroll wrapp */}
                <div className="wrapp_scroll">
                    <div>
                        <div className="user_data">
                            <h3>{UserInfo_const[index].name}</h3>
                            <p>{UserInfo_const[index].prof}</p>
                            <span>{UserInfo_const[index].location}</span>
                        </div>
                        <div className="education_wrapper">

                            <h1> <img className = "cv_icon" src={"https://i.postimg.cc/Fscr3VyG/Education.png"} alt="Education" /> Education:</h1>
                            <div className="education">
                                <h4>{UserInfo_const[index].univers}</h4>
                                <p>{UserInfo_const[index].magistr}</p>
                                <span>{UserInfo_const[index].mag_years}</span>
                            </div>
                            <div className="education">
                                <h4>{UserInfo_const[index].univers_bak}</h4>
                                <p>{UserInfo_const[index].bakalavr}</p>
                                <span>{UserInfo_const[index].bak_years}</span>
                            </div>


                            <h1><img className = "cv_icon" src={"https://i.postimg.cc/bwz7rx3Z/Work-experience.png"} alt="Work_experience  " /> Work experience:</h1>
                            <div className="education">
                                <h4>{UserInfo_const[index].company}</h4>
                                <p>{UserInfo_const[index].job}</p>
                                <span>{UserInfo_const[index].job_adress}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="right_side">
                <div>
                    {friends_list}
                </div>
            </div>
        </div>
    )

}

export default RightSide;