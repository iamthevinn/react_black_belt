import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import HomeView from './HomeView'
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
      <div style={{ display: 'inline-block', width: '50%'}}>
        <ul className="tabs">
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
          <div>
            <div style={{ display: 'inline-block', verticalAlign: 'top', fontSize: '36px' , width: '50%'}} >News Me!</div>
            <NavBar />
          </div>

          <Switch>
            <Route exact path="/" component={HomeView} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
