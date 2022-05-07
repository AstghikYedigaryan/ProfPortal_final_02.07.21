import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetAnnouncementName } from "../../action/jobActions";

const Logo = () => {

//  const handleClick = () => {
//   this.props.resetAnnouncementName();
// }
  return (

    <a className = "nav_logo" href = "#" 
    //  onClick={handleClick} 
     >
      <img className="Logo1" src="./../../img/logo_text.png" alt="LoGo"  height = "40px" />
      <img className="logo2" src="./../../img/logo_mini.png" alt="LoGo" />
    </a>

  )
};

const mapStateToProps = ({ job }) => {
  console.log(job, "stateee")
  return {
      announcementName: job.announcementName,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      resetAnnouncementName,
  },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Logo);