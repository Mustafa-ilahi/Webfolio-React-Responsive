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
import twitterIcon from '../assets/twitter.png';

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
                <a href="https://github.com/Mustafa-ilahi" target="_blank">
                <img src={githubIcon} className="githubIcon"/> &nbsp; &nbsp; 
                </a>
                <img src={gmailIcon} className="gmailIcon"/> &nbsp; &nbsp;
                <img src={fbIcon} className="fbIcon"/> &nbsp; &nbsp;
                <img src={scIcon} className="scIcon"/> &nbsp; &nbsp;
                <img src={instaIcon} className="instaIcon"/>  
                <br/>
                <br/>
                <br/>
                <br/>
             </div>
        )
    }
}
export default Text;