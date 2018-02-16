import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import ArticleCard from './ArticleCard'

class HomeView extends Component {
  render() {
    return (
      <div>
        <h1 className="homeHeader">
          Top Headlines
        </h1>
          <div className="topHeadlinesContainer">
            <div className="topHeadlinesInnerContainer">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView;
