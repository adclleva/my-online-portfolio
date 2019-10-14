import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  render() {
    return (
      <div>
        <h1> This is the Contact </h1>
        <p className="name">{this.props.name}</p>
      </div>
    );
  }
}

export default Contact
