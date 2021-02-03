import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from './components/Navbar';
import Header from './components/Header';
import Text from './components/Text'

class App extends React.Component{
  render(){
    document.body.style.backgroundColor = "whitesmoke";
    return(
      <div>
        <Nav_bar />
        <Header />
        <Text />
      </div>
    )
  }
}

export default App;
