import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppLayout from './components/app-layout/app-layout';
import { Home, Events } from './routes';
import { Switch, Route } from 'react-router-dom';
import Teams from './routes/teams';
import About from './routes/about';
import Tournaments from './routes/tournaments';
import Context from './core/api-context';

export default class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Context>
              <Route exact path='/' component={Home} />
              <Route exact path='/events' component={Events} />
              <Route exact path='/teams' component={Teams} />
              <Route exact path='/about' component={About} />
              <Route exact path='/tournaments' component={Tournaments} />
              </Context>
        </Switch>
      </AppLayout>
    );
  }
}
