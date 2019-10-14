import React, { Component } from 'react'
import './Introduction.css'

class Introduction extends Component {
  render() {
    return (
      <div>
        <h1> This is the intro </h1>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Introduction
