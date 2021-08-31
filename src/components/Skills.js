import '../App.css';
import {React,Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Skills extends Component{
    render(){
        return(
            <div className="skillsDiv" id="skills">
                <hr/>
                <h3>Skills</h3>
                <br/>
                
                <h4 style={{fontFamily:'sans-serif'}}>HTML</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-4" className="progress-bar progress-bar-striped" role="progressbar" style={{width:'50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    {/* <div id="shadowFour"></div> */}
                </div><br />
                <h4 style={{fontFamily:'sans-serif'}}>CSS</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-5" className="progress-bar progress-bar-striped" role="progressbar" style={{width:'55%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    {/* <div id="shadowFive"></div> */}
                </div><br />
                <h4 style={{fontFamily:'sans-serif'}}>Bootstrap</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-6" className="progress-bar progress-bar-striped" role="progressbar" style={{width:'55%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    {/* <div id="shadowSix"></div> */}
                </div><br/>
                <h4 style={{fontFamily:'sans-serif'}}>JavaScript</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-1" className="progress-bar progress-bar-striped" role="progressbar" style={{width:'95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    {/* <div id="shadowOne"></div> */}
                </div><br />
                <h4 style={{fontFamily:'sans-serif'}}>React</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-2" className="progress-bar progress-bar-striped" role="progressbar" style={{width:'89%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    {/* <div id="shadowTwo"></div> */}
                </div><br />
                <h4 style={{fontFamily:'sans-serif'}}>React Native</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-2" className="progress-bar progress-bar-striped" role="progressbar" style={{width:'89%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    {/* <div id="shadowTwo"></div> */}
                </div><br />
                <h4 style={{fontFamily:'sans-serif'}}>Redux</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-1" className="progress-bar progress-bar-striped" role="progressbar" style={{width:'95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    {/* <div id="shadowOne"></div> */}
                </div><br />
                <hr/>
            </div>
        )
    }
}

export default Skills;