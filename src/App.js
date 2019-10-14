import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js'
import Introduction from './components/Introduction/Introduction.js'
import About from './components/About/About.js'
import Projects from './components/Projects/Projects.js'
import Contact from './components/Contact/Contact.js'
import './App.css';

class App extends Component {
  constructor(props) { // we set the state for App
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="">
        <Navbar />
        <Introduction name="Arvin Lleva"/>
        <About />
        <Projects />
        <Contact />

      </div>
    )
  }
}


export default App;
