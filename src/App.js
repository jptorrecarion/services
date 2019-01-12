import React, { Component } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Service from './components/service';
import About from './components/about';
import {BrowserRouter , Route} from 'react-router-dom'



class App extends Component {
    
    
    
  render() {
    return (
        <BrowserRouter>
      <div className="App"> 
        
       <Navbar />
        <Route exact path='/' component = {Home} />
        <Route path='/service' component = {Service} />
        <Route path='/about' component = {About} />
        
        
      </div>
        
        </BrowserRouter>
        
    );
  }
}

export default App;
