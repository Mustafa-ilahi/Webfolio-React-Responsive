import '../App.css';
import React from 'react';
import profileImg from '../assets/profileImg.jpeg';
class PersonalInformation extends React.Component{
    render(){
        return(
            <div className="personalInfo">
                <h2>Personal Information</h2>
                <div className="profileDiv">
                    <img src={profileImg} className="profileImg"/>   
                    {/* <h1>hover me</h1> */}
                </div> 
            </div>
            
        )
    }
}
export default PersonalInformation;