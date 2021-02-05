import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from './components/Navbar';
import Header from './components/Header';
import Text from './components/Text';
import PersonalInformation from './components/PersonalInformation';
import Education from './components/Education';
import Skills from './components/Skills';

class App extends React.Component{
  render(){
    document.body.style.backgroundColor = "whitesmoke";
    return(
      <div>
        <Nav_bar />
        <Header />
        <Text />
        <PersonalInformation />
        <Education />
        <Skills />
      </div>
    )
  }
}

export default App;
