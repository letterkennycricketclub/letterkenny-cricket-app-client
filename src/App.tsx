import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppLayout from './components/app-layout/app-layout';
import { Home, Events } from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Teams from './routes/teams';
import About from './routes/about';
import Tournaments from './routes/tournaments';
import Context from './core/api-context';
import DetailedPointTable from './components/point-table/detailed-point-table';
import { AdminRoute } from './routes/admin/admin-route';
import AdminPointTable from './routes/admin/point-table';
import Login from './components/login/login';
import Admin from './routes/admin/admin';

export default class App extends Component {
  render() {
    return (
      <Router>
      <AppLayout>
        <Switch>
          <Context>
              <Route exact path='/' component={Home} />
              <Route  path='/events' component={Events} />
              <Route  path='/teams' component={Teams} />
              <Route  path='/about' component={About} />
              <Route  path='/tournaments' component={Tournaments} />
              <Route  path='/detailed-point-table' component={DetailedPointTable} />
                
              <Route exact path='/admin/login' component={Login} />
              <AdminRoute path="/admin/home" component={Admin} />
              <AdminRoute path='/admin/point-table' component={AdminPointTable} />
          </Context>
        </Switch>
      </AppLayout>
        </Router>
    );
  }
}
