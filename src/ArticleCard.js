import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';

class ArticleCard extends Component {
  render() {
    return (
      <div className="card articleCard">
        <div className="articleImage">
          <img src={this.props.urlToImage} alt="newsPic" />
        </div>
        <div className="articleDetails">
          <div className="articleTitleAndAuthor">
            <a className="articleTitle" href={this.props.urlToArticle}>{this.props.title}</a>
            <div className="articleAuthor" >{this.props.author}</div>
          </div>
          <div>
            <div>{this.props.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleCard;
