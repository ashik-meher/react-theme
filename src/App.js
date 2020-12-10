import React from 'react';
import logo from './logo.svg';
import './App.css';

//App residual files import

import MyInfo from "./components/MyInfo";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          See <code>src/App.js</code> and save to reload.
        </p>
        {/* mycode */}
        

       <iframe width="1173" height="660" src="https://www.youtube.com/embed/K7lb6KWBanI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/* mycode */}


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React with me
        </a>
      </header>

     

      <MyInfo /> 

      <Footer />

    
    </div>

    
  );
}


// new app

export default App;
