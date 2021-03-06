import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import educationImg from '../assets/education.png';
import {Card,CardDeck} from 'react-bootstrap';
import schoolImg from '../assets/school.jpg';
import collegeImg from '../assets/college.jpeg';
import uniImg from '../assets/uni.jpg';
import lineImg from '../assets/line.PNG';

class Education extends React.Component{
    render(){
        return(
            <div>
                <div style={{textAlign: "center"}}>
                    <img src={educationImg} id="educationImg"/>
                    <h3 id="educationText"> Education</h3>
                    <br/>
                    <br/>
                    <br/>
                </div>

                {/* Card */}
                <div id="main">
                <div id="one">
                    <img src={schoolImg} id="uniImg"/>
                    <h4>Shah Grammar High School</h4>
                    <br/>
                    <ul>
                        <img src={lineImg} id="lineImg"/>
                        <li><b>Science </b></li>
                        <li>Pass Out in 2016</li>
                    </ul>
                </div>
                <div id="two">
                    <img src={collegeImg} id="uniImg"/>
                    <h4>P.E.C.H.S Govt Degree Science College</h4>
                    <ul>
                        <img src={lineImg} id="lineImg"/>
                        <li><b>Pre Engineering  </b></li>
                        <li>2016-2018</li>
                    </ul>
                </div>
                <div id="three">
                    <img src={uniImg} id="uniImg"/>
                    <h4>Sir Syed University of Technology and Engineering</h4>
                    <ul>
                        <img src={lineImg} id="lineImg"/>
                        <li><b>Bachelor of Science in Software Engineering</b></li>
                        <li>2019-2022</li>
                    </ul>
                </div>
            </div>
            <br/>
            </div>
            
        )
    }
}
export default Education;