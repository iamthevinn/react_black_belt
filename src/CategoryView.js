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
          <div className="categoryButtonContainer">
              <div className="categoryButton">
                <input style={{marginBottom:'0px'}} className="radioButton" type="checkBox" />
                <div className="radioText">Business</div>
              </div>
              <div className="categoryButton">
                <input style={{marginBottom:'0px'}} className="radioButton" type="checkBox" />
                <div className="radioText">Technology</div>
              </div>
              <div className="categoryButton">
                <input style={{marginBottom:'0px'}} className="radioButton" type="checkBox" />
                <div className="radioText">Science</div>
              </div>
          </div>
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
    changeSelectedCategory: (categoryName) => dispatch({type: CHANGE_SELECTED_CATEGORY, payload: categoryName})
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(CategoryView)