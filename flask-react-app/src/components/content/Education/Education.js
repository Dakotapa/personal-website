import React from 'react';
import './Education.css'
import USC from '../../../pictures/usc.png'
import LAHC from '../../../pictures/lahc.png'

function Education() {

  return (
  	<div className="education" id="education">
        <h1>
            Education
        </h1>
        <br/>
        <div className="USC">
            <img src={ USC } alt="USC logo"/>
            <div className="USCDescription">
                <h3>
                    University of Southern California
                </h3>
                <h5>
                    Attendance: Fall 2016 - Summer 2020 
                    <br/>
                    Major: Computer Science 
                    <br/>
                </h5> 
            </div>
        </div>
        <div className="LAHC">
            <img src={ LAHC } alt="LAHC logo"/>
            <div className="LAHCDescription">
                <h5>
                    Attendance: 2014 - 2016 
                    <br/>
                    Major: Mathematics
                    <br/>
                </h5> 
            </div>
        </div>
  	</div>
  );
}

export default Education;