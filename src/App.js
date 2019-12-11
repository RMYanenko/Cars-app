import React,  { Component } from 'react';
import classes from './App.module.scss';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import About from './About/About';
import Cars from './Cars/Cars';
import CarDetail from './CarDetail/CarDetail';

class App extends Component {
  render() {

    return (
      <div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink activeClassName={classes.active} to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active}  to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} activeStyle={{fontStyle: 'italic'}} to={{
                pathname: '/cars'
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>

        {/*localhost:3000*/}
        <Switch>
          <Route path="/" exact render={() => <h1>Home Page</h1>} />
          <Route path="/about" component={About} />          
          <Route path="/cars/:name" component={CarDetail} />
          <Route path="/cars" component={Cars} />
          <Redirect to={'/'} />
          {/* <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} /> */}
        </Switch>
        
      </div>
    );
  }
}

export default App;