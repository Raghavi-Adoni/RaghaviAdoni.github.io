import React from 'react';
import logo from './round-profile.jpeg';
import './App.css';
import About from './components/About';
import HomeTabs from './components/HomeTabs';
import Footer from './components/Footer';


function App() {
  return (
    <div>
    <div className="app">
      <header className="app-header">
        <img src={logo}  
           className="app-logo" alt="logo" 
          />
        <About />
      </header>
      <HomeTabs />
      </div>
    <div className='icons-List'><Footer/>
    </div></div>
  );
}

export default App;
