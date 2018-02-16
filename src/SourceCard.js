import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';

class SourceCard extends Component {
  render() {
    return (
      <div className="card sourceCard">
          <div>{this.props.name}</div>
      </div>
    );
  }
}

export default SourceCard;
