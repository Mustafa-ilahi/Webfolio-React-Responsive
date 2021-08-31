import '../App.css';
import React from 'react';
import developerImg from '../assets/developer.svg';
import SunnyMorning from './SunnyMorning';
import GreatThings from './GreatThings';
import githubIcon from '../assets/github.png';
import gmailIcon from '../assets/gmail.png';
import fbIcon from '../assets/facebook.png';
import scIcon from '../assets/sc.png';
import instaIcon from '../assets/insta.png';
import codeIcon from '../assets/code.png';
import myPDF from '../assets/cv.pdf';

class Text extends React.Component{
    render(){
        return(
            <div className="text">
            <React.Fragment >
                <SunnyMorning text='Hello there!'/>
                <GreatThings text='I`m Mustafa Ilahi'/>
            </React.Fragment>
                <br/>
                <br/>
                <br/>
                <img src={developerImg} className="developerImg"/>
                <br/>
                <br/>
                <h4>Connect With Me Now!</h4>
                <br/>
                <a href="https://github.com/Mustafa-ilahi" target="_blank">
                <img src={githubIcon} className="githubIcon"/> &nbsp; &nbsp; 
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mustafailahi586@gmail.com&body=my-text" target="_blank">
                <img src={gmailIcon} className="gmailIcon"/> &nbsp; &nbsp;
                </a>
                <a href="https://www.facebook.com/mustafa.ilahi.1/" target="_blank">
                <img src={fbIcon} className="fbIcon"/> &nbsp; &nbsp;
                </a>
                {/* <a href="https://www.snapchat.com/add/mustafa_ilahi" target="_blank">
                <img src={scIcon} className="scIcon"/> &nbsp; &nbsp;
                </a>
                <a href="https://www.instagram.com/_mustafa_ilahi/" target="_blank">
                <img src={instaIcon} className="instaIcon"/>  
                </a> */}
                <br/>
                <br/>
                <h5>Developer | Software Engineer</h5>
                <br/>
                <img src={codeIcon} className="codeIcon"/>
                <br/>
                <br/>
                {/* Download Button */}
                <a className="face-button" href={myPDF} download="cv.pdf">
                <div className="face-primary">
                    <span className="icon fa fa-cloud" />
                    Download CV
                </div>
                <div className="face-secondary">
                    <span className="icon fa fa-hdd-o" />
                    Size:  70.6KB
                </div>
                </a>
                <hr />
                <br />
                <br />
             </div>
        )
    }
}
export default Text;