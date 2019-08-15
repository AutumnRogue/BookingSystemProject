import React from 'react';
import './App.css';
import {Component} from 'react';
import Patient from './DataIncoming.js'
import Header from './header'
import ModalPopup from './Modal'

class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <header className="App-Header">
          <div id="Doctor"> Doctor</div>
          <ModalPopup />
          <div id="Test">Test</div>
          <div id="Test2">Test2</div>
        </header>
      </div>
      
      <div id="body">
        <Header/>
        <Patient />
        <div id="footer"/>
      </div>
      </>
    );
  }
  
}



  export default App;