import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';

class SourceCard extends Component {

  

  render() {
    return (
      <div className="card sourceCard">
        <div>Name: {this.props.name}</div>
        <div>Description: {this.props.description}</div>
        <button>Subscribe</button>
      </div>
    );
  }
}

export default SourceCard;
