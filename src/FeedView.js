import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import { loadSubscribedSourcesToState } from './state/actions';
import { connect } from 'react-redux';

class FeedView extends Component {

  componentDidMount() {
    this.props.loadSubscribedSourcesToState();
  }

  render() {
      return (
        <div>
          <h1 className="pageHeader">
            Personal Feed
          </h1>
            <div className="topHeadlinesContainer">
              <div className="topHeadlinesInnerContainer">
              
            </div>
          </div>
        </div>
      );
  }
}

const mapStateToProps = state => {

  return {
    subscribedHeadlines: state.subscribedHeadlines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadSubscribedSourcesToState: () => dispatch(loadSubscribedSourcesToState())
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(FeedView)