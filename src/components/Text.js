import '../App.css';
import React from 'react';
import developerImg from '../assets/developer.svg';

class Text extends React.Component{
    render(){
        return(
            <div className="text">
                <h3>Hello there!</h3>
                <h2 style={{color:"#C70039"}}>I'm Mustafa Ilahi</h2>
                <br/>
                <img src={developerImg} className="developerImg"/>
                <br/>
            </div>
        )
    }
}
export default Text;