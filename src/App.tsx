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
import DetailedPointTable from './components/point-table/detailed-point-table';
import { AdminRoute } from './routes/admin/admin-route';
import AdminPointTable from './routes/admin/point-table';
import Login from './components/login/login';
import Admin from './routes/admin/admin';

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
              <Route exact path='/detailed-point-table' component={DetailedPointTable} />
                
              <Route exact path='/admin/login' component={Login} />
              <AdminRoute path="/admin/home" component={Admin} />
              <AdminRoute path='/admin/point-table' component={AdminPointTable} />
          </Context>
        </Switch>
      </AppLayout>
    );
  }
}
