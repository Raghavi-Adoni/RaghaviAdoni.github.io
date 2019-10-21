import React from 'react';
import logo from './round-profile.jpeg';
import './App.css';
import About from './components/about';
import Tabs1 from './components/tabs1';
import Footer from './components/footer';


function App() {
  return (
    <div>
    <div className="App">
      <header className="App-header">
        <img src={logo}  
           className="App-logo" alt="logo" 
          />
    <div className="Header">
        <About />
    </div>
      </header>
      <Tabs1 />
      </div>
    <div className='Icons-List'><Footer/>
    </div></div>
  );
}

export default App;
