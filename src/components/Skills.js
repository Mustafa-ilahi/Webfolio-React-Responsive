import '../App.css';
import {React,Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Skills extends Component{
    render(){
        return(
            <div className="skillsDiv" id="skills">
                <hr/>
                <h3>Programming Languages that I Know</h3>
                <br/>
                <h4 style={{fontFamily:'sans-serif'}}>JavaScript</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-1" className="progress-bar" role="progressbar" style={{width:'95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div><br />
                <h4 style={{fontFamily:'sans-serif'}}>React</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-2" className="progress-bar" role="progressbar" style={{width:'89%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div><br />
                <h4 style={{fontFamily:'sans-serif'}}>Redux</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-3" className="progress-bar" role="progressbar" style={{width:'25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div><br />
                <h4 style={{fontFamily:'sans-serif'}}>C</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-4" className="progress-bar" role="progressbar" style={{width:'50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div><br />
                <h4 style={{fontFamily:'sans-serif'}}>Java</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-5" className="progress-bar" role="progressbar" style={{width:'55%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div><br />
                <h4 style={{fontFamily:'sans-serif'}}>Python</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-6" className="progress-bar" role="progressbar" style={{width:'55%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <br/>
                <hr/>
            </div>
        )
    }
}

export default Skills;