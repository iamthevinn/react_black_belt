import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import { addSourceToSubscriptions } from './state/actions';
import { connect } from 'react-redux';

class SourceCard extends Component {

  subscribe(sourceObj) {
    if (this.props.subscribedSources.length < 3)
      this.props.addSourceToSubscriptions(sourceObj)
  }

  render() {
    return (
      <div className="card sourceCard">
        <div className="sourceNameAndDescription">
          <div className="sourceName">Name: {this.props.name}</div>
          <div className="sourceDescription">{this.props.description}</div>
        </div>
        <div className="sourceButton">
          <button style={{margin: '0px'}} onClick={() => this.subscribe({ sourceId: this.props.id })} disabled={this.props.isSubscribed} className={this.props.isSubscribed ? "warning" : "success"}>{this.props.isSubscribed ? "Subscribed" : "Subscribe"}</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    subscribedSources: state.subscribedSources
  };
};


const mapDispatchToProps = dispatch => {
  return {
    addSourceToSubscriptions: (sourceObj) => dispatch(addSourceToSubscriptions(sourceObj)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SourceCard)