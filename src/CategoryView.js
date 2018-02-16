import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import ArticleCard from './ArticleCard';
import { CHANGE_SELECTED_CATEGORY, loadCategory, loadSubscribedSourcesToState } from './state/actions';
import { connect } from 'react-redux';
import SourceCard from './SourceCard'

class CategoryView extends Component {

  componentDidMount() {
    this.props.loadCategory(this.props.selectedCategory);
    this.props.loadSubscribedSourcesToState();
  }

  changeSelectedCategory(categoryName) {
    this.props.changeSelectedCategory(categoryName);
    this.props.loadCategory(categoryName)
  }

  render() {
    return (
      <div>
        <h1 className="pageHeader">
          Select Your Sources!
        </h1>
        <div className="categoryButtonContainer">
          <div className="md-multi-ctrl-field">
            <input checked={this.props.selectedCategory === 'Business' ? true : false} onChange={() => this.changeSelectedCategory('Business')} name="radio-example" id="radio-example-1" type="radio" />
            <label htmlFor="radio-example-1">Business</label>
            <input checked={this.props.selectedCategory === 'Technology' ? true : false} onChange={() => this.changeSelectedCategory('Technology')} name="radio-example" id="radio-example-2" type="radio" />
            <label htmlFor="radio-example-2">Technology</label>
            <input checked={this.props.selectedCategory === 'Science' ? true : false} onChange={() => this.changeSelectedCategory('Science')} name="radio-example" id="radio-example-3" type="radio" />
            <label htmlFor="radio-example-3">Science</label>
          </div>
        </div>
        <h1 className="pageHeader">
          {this.props.selectedCategory} Sources
        </h1>
        <div className="sourcesContainer">
              <div className="sourcesInnerContainer">
              {this.props.sourcesByCategory.map((source) => <SourceCard key={source.name} description={source.description} name={source.name} />)}
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    selectedCategory: state.selectedCategory,
    sourcesByCategory: state.sourcesByCategory,
    subscribedSources: state.subscribedSources
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSelectedCategory: (categoryName) => dispatch({ type: CHANGE_SELECTED_CATEGORY, payload: categoryName }),
    loadCategory: (categoryName) => dispatch(loadCategory(categoryName)),
    loadSubscribedSourcesToState: () => dispatch(loadSubscribedSourcesToState()),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoryView)