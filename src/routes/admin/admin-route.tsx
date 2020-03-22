import React, { Component, FC } from "react";
import { Route, Redirect, RouteProps } from "react-router";
import { UserService } from '../../services/user-service';

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb: any) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb: any) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }

export const AdminRoute: FC<any>= ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      UserService.isUserLoggedIn()
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/admin/login',
            state: { from: props.location }
          }} />
    )} />
  )