import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import { loadSubscribedSourcesToState } from './state/actions';
import { connect } from 'react-redux';
import ArticleCard from './ArticleCard'

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
              {this.props.subscribedHeadlines.map((article) => <ArticleCard key={article.url} title={article.title} description={article.description} author={article.author} urlToImage={article.urlToImage} urlToArticle={article.url} />)}
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