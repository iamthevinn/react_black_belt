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
        <div>Name: {this.props.name}</div>
        <div>Description: {this.props.description}</div>
        <button onClick={() => this.subscribe({sourceId: this.props.id})} disabled={this.props.isSubscribed} className={this.props.isSubscribed ? "warning" : "success"}>{this.props.isSubscribed ? "Subscribed" : "Subscribe"}</button>
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