import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import ArticleCard from './ArticleCard';
import { loadTopHeadlines } from './state/actions';
import { connect } from 'react-redux';

class HomeView extends Component {

  componentDidMount() {
    this.props.loadTopHeadlines()
  }

  render() {
    if (this.props.topHeadlines) {
      console.log(this.props.topHeadlines)
      return (
        <div>
          <h1 className="homeHeader">
            Top Headlines
          </h1>
            <div className="topHeadlinesContainer">
              <div className="topHeadlinesInnerContainer">
              {this.props.topHeadlines.map((article) => <ArticleCard key={article.url} title={article.title} description={article.description} author={article.author} urlToImage={article.urlToImage} urlToArticle={article.url} />)}
            </div>
          </div>
        </div>
      );
    } else
        return null
  }
}

const mapStateToProps = state => {

  return {
    topHeadlines: state.topHeadlines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadTopHeadlines: () => dispatch(loadTopHeadlines())
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(HomeView)