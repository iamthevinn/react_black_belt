import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';

class ArticleCard extends Component {
  render() {
    return (
      <div className="card articleCard">
          <a href={this.props.urlToArticle}>Title: {this.props.title}</a>
          <div>Author: {this.props.author}</div>
          <div>Description: {this.props.description}</div>
          <img src={this.props.urlToImage} alt="newsPic" />
      </div>
    );
  }
}

export default ArticleCard;
