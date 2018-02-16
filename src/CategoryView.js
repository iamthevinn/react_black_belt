import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import ArticleCard from './ArticleCard';
import { CHANGE_SELECTED_CATEGORY } from './state/actions';
import { connect } from 'react-redux';

class CategoryView extends Component {

  componentDidMount() {

  }

  changeSelectedCategory(categoryName) {
    this.props.changeSelectedCategory(categoryName);
  }

  render() {
    return (
      <div>
        <h1 className="pageHeader">
          Select Your Sources!
          </h1>
        <form className="categoryButtonContainer">
          <div className="md-multi-ctrl-field">
            <input checked={this.props.selectedCategory === 'business' ? true : false} onChange={() => this.changeSelectedCategory('business')} name="radio-example" id="radio-example-1" type="radio" />
            <label htmlFor="radio-example-1">Business</label>
            <input checked={this.props.selectedCategory === 'technology' ? true : false} onChange={() => this.changeSelectedCategory('technology')} name="radio-example" id="radio-example-2" type="radio" />
            <label htmlFor="radio-example-2">Technology</label>
            <input checked={this.props.selectedCategory === 'science' ? true : false} onChange={() => this.changeSelectedCategory('science')} name="radio-example" id="radio-example-3" type="radio" />
            <label htmlFor="radio-example-3">Science</label>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    selectedCategory: state.selectedCategory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSelectedCategory: (categoryName) => dispatch({ type: CHANGE_SELECTED_CATEGORY, payload: categoryName })
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoryView)