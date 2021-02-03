import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from './components/Navbar';
import Header from './components/Header';

class App extends React.Component{
  render(){
    return(
      <div>
        <Nav_bar />
        <Header />
      </div>
    )
  }
}

export default App;
