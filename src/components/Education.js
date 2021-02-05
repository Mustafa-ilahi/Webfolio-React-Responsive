import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import educationImg from '../assets/education.png';
import {Card,CardDeck} from 'react-bootstrap';
import schoolImg from '../assets/school.jpg';
import collegeImg from '../assets/college.jpeg';
import uniImg from '../assets/uni.jpg';

class Education extends React.Component{
    render(){
        return(
            <div>
                <div style={{textAlign: "center"}}>
                    <img src={educationImg} id="educationImg"/>
                    <h3 id="educationText"> My Education</h3>
                    <br/>
                    <br/>
                    <br/>
            <div className="card-deck">
            <div className="card" >
                <img src={schoolImg} className="card-img-top" id="secondImgCard"/>
                <div className="card-body">
                    <br/>
                <h5 className="card-title">Shah Grammar High School</h5>
                {/* <hr/> */}
                <ul className="card-footer" id="uniFooter">
                    <li><b>Science </b></li>
                    <hr/>
                    <li>Pass Out in 2016</li>
                </ul>
                </div>
            </div>
            <div className="card">
                <img src={collegeImg} className="card-img-top" id="secondImgCard" />
                <div className="card-body">
                    <br/>
                <h5 className="card-title">P.E.C.H.S Govt Degree Science College</h5>
                <ul className="card-footer" id="uniFooter">
                    <li><b>Pre Engineering </b></li>
                    <hr/>
                    <li>2016-2018</li>
                </ul>
                </div>
            </div>
            <div className="card">
                <img src={uniImg} className="card-img-top" id="thirdImgCard" />
                <div className="card-body">
                <h5 className="card-title">Sir Syed University of Technology and Engineering</h5>
                <ul className="card-footer" id="uniFooter">
                    <li><b>Bachelor of Science in Software Engineering </b></li>
                    <hr/>
                    <li>2019-2022</li>
                </ul>
                </div>
            </div>
</div>
                <br/>
</div>
</div>
            
        )
    }
}
export default Education;