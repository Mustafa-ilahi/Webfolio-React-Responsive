import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImg from '../assets/profileImg.jpeg';

class PersonalInformation extends React.Component{
    render(){
        return(
            <div className="personalInfo">
                <h2>Personal Information</h2>
                <div className="profileDiv">
                    <img src={profileImg} className="profileImg"/>   
                </div> 
                    <div id="aboutMe">
                        <br/>
                        <h4>About Me</h4>
                        <p>My name is Mustafa Ilahi and I'm a Full Stack Web Developer additionally an Educated and a propelled programming understudy and a fast student, brisk to increase with any current improvement stage, and perform configuration, coding, troubleshooting, and testing application and framework programming. Amazing relational just as relational abilities and appreciates a high-pressure group climate.</p>
                    </div>
                        <br/>
                        <br/>
                        
            </div>
            
        )
    }
}
export default PersonalInformation;