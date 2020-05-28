import React from 'react';
import './Workexp.css'
import Linquest from '../../../pictures/linquest.jpeg'
import JPL from '../../../pictures/jpl.png'

function Workexp() {

  return (
  	<div className="Workexp" id="experience">

    	<h1> Work Experience </h1> <br/>
        <div className="Linquest">

            <img src={Linquest} alt="Linquest logo"/>
            <div className="LinquestDescription">
            <h3> Linquest October 2018 - March 2020 </h3>
            <h5> Semester: Spring 2019 - Spring 2020 <br/>Position: Software Engineer Intern </h5> 
            <h5> Achievements: </h5>
            <ul>
                <li> Practice agile development methodologies in a small software team.</li>
                <li> Utilize Jasmine testing framework for unit tests for backend Python Pyramid
                business functionality.</li>
                <li> Deploy docker containers to implement end to end testing</li>
                <li> Integrate Bokeh NetworkX Graphs into Angular using backend to pull 
                    Jira Data from Rest API to graph dependencies between Jira programs</li>
            </ul>


            <h5> Semester: Fall 2018 <br/>Position: Cyber Security Systems Engineer Intern </h5> 
            <h5> Achievements: </h5>
            <ul>
                <li> Assist in the completion of various tasks regarding cyber tests and 
                evaluations and construction of technical requirements documents.</li>
                <li> Research the Risk Management Framework and constructed framework 
                policies with management tailored to DOD systems.</li>
                <li> Conduct meetings and collaborate with government contacts in
                 construction of an Interface Control Document.</li>
            </ul>

            </div>
        </div>
        <div className="JPL">
            <img src={JPL} alt="JPL logo"/>
            <div className="JPLDescription">
            <h5> Semester: Fall 2015 <br/>Position: Aerospace Scholar Intern </h5> 
            <h5> Achievements: </h5>
            <ul>
                <li> C++ Programming of a rover which simulates all phases of a flight 
                program for a MARS exploration rover that conducts a sample return, <br/>emergency
                assist of other rovers, and accomplishes science objectives as well as 
                habitable exploration documentary.</li>
                <li> Held position of team that helped coordinate maneuverability functionalities
                 and data deliveries to project management.</li>
                <li> Interacted with NASA personnel and engineers to build and test two prototypes
                 of a planetary sample return rover.</li>
            </ul>
            </div>
        </div>



  	</div>
  );
}

export default Workexp;
