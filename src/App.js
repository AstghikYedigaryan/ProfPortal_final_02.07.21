import React from "react";
import Header from './Main/Header/Index';
import './Style/Header.css';
import './Style/App.css';
import './Style/Section1.css';
import './Style/Section234.css';
import "./Style/JobOffers.css";
import { connect } from 'react-redux';
import Footer from './Main/Footer';
import Section1 from './Main/Section1/Index';
import Section2 from './Main/Section2/Index';
import Section3 from './Main/Section3/Index';
import Section4 from './Main/Section4/Index';
import { Fragment, useState } from 'react';
import UserPage from "./User page/IndexUserPage"
import JobOffers from "./Job_offers/index";
import {jobInfo_const, job_button_text_const} from "./constaat/constantJobOffers"
import { JobSeekers_const, job_seekers_text_const } from './constaat/constantJobSeekers';
import { AvailableTraings_const, available_Traings_text_const } from './constaat/constantAvailableTraings';
// import { Posts_const } from './constaat/constantPosts';


function App(props) {

  const { announcementName } = props;
  console.log(props.announcementName);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoggedIn = () => setIsLoggedIn(true);
  const LoggedOut = () => setIsLoggedIn(false);

let jobInfo = jobInfo_const;
let job_button_text = job_button_text_const;
let jobSeekers = JobSeekers_const;
let jobseekers_button_text = job_seekers_text_const;
let availableTraings = AvailableTraings_const;
let availableTraings_button_text = available_Traings_text_const;



  return (
    <div className="App">
       { !isLoggedIn ?
      <Fragment >
        <Header  LoggedIn = { LoggedIn }  LoggedOut = { LoggedOut }/>
        {announcementName === "Job offers" && <JobOffers jobInfo = {jobInfo } job_button_text = {job_button_text} />}
        {announcementName === "Job seekers" && <JobOffers jobInfo = {jobSeekers } job_button_text = {jobseekers_button_text} />}
        {announcementName === "Available trainings" && <JobOffers jobInfo = {availableTraings } job_button_text = {availableTraings_button_text} />}
        {!announcementName && <div id="main_wrapper">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>}
      </Fragment>
      : 
       <UserPage  LoggedOut = { LoggedOut } />
       }
      <Footer />
    </div>
  );
}



export default connect(({ job }) => ({ announcementName: job.announcementName }))(App);

