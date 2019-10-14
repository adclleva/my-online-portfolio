import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render() {
    return (
      <div>
        <h1> This is the About </h1>
        <p className="name">{this.props.name}</p>
      </div>
    );
  }
}

export default About
