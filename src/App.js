import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import ContactBuilder from './containers/contactBuilder';
import AddForm from './components/ContactForm/AddForm/AddForm';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route path="/addcontact" component={AddForm}></Route>
            <Route path="/" exact component={ContactBuilder}></Route>
          </Switch>
      </div>
    );
  }
}

export default App;
