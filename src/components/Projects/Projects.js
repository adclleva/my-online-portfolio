import React, { Component } from 'react'
import './Projects.css'

class Projects extends Component {
  render() {
    return (
      <div>
        <h1> This is the Projects </h1>
        <p className="name">{this.props.name}</p>
      </div>
    );
  }
}

export default Projects
