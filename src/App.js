import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import HomeView from './HomeView'
import FeedView from './FeedView'
import CategoryView from './CategoryView'
import {
  Switch,
  Link,
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const NavItem = (props) => {

  return (
    <Route exact={props.exact} path={props.to} children={({ match }) => {
      return (
        <li className={`tab-title ${match ? 'active' : ''}`} >
          <Link to={props.to}>{props.navName}</Link>
        </li>
      )
    }
    } />
  )
}


class NavBar extends Component {

  render() {
    return (
      <div className="navigationContent">
        <ul className="tabs tabNames">
          <NavItem exact={true} to={'/'} navName="Home" />
          <NavItem exact={true} to={'/categories'} navName="Customize" />
          <NavItem exact={true} to={'/feed'} navName="Personal Feed" />
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="appHeader">
            <div className="newsMe" >News Me!</div>
            <NavBar />
          </div>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/categories" component={CategoryView} />
            <Route exact path="/feed" component={FeedView} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
