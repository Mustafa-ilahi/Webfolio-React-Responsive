import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import expertizoImg from '../assets/expertizo.png';
import saylaniImg from '../assets/saylani.png';

class Experience extends React.Component{
    render(){
        return(
            <div id="experience" className="experienceDiv">
                <h3>My Experience</h3>
                <div className="expCard">
                    <div className="firstExperience">
                        <img src={expertizoImg} id="expertizoImg"/>
                        <div className="expText">
                            <br/>
                            <h5>Expertizo</h5>
                            <p>Work as <b>MERN Stack Developer</b></p>
                        </div>
                    </div>
                    <div className="secondExperience">
                        <br/>
                        <br/>
                    <img src={saylaniImg} id="saylaniImg"/>
                    <br/>
                        <div className="sayText">
                            <br/>
                            <h5>Saylani</h5>
                            <p>Work as <b>MERN Stack Developer</b></p>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <p id="footer">Made by Mustafa Ilahi Github @Mustafa-ilahi</p>
                <br/>
            </div>
        )
    }
}

export default Experience;