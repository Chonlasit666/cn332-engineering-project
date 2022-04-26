import React from "react";

import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import {
  LOGIN_URL,
  HOME_URL,
  Createproject_URL,
  Dashboard_URL,
  Project_URL,
  GoogleCalendar_URL,
  Profile_URL,
} from "./urls";

import { Login, Home, Createproject, Dashboard, Project, GoogleCalendar, Profile} from "../pages";

export const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={LOGIN_URL} component={Login} />
        <Route path={HOME_URL} component={Home} />
        <Route path={Dashboard_URL} component={Dashboard} />
        <Route path={Project_URL} component={Project} />
        <Route path={GoogleCalendar_URL} component={GoogleCalendar} />
        <Route path={Createproject_URL} component={Createproject} />
        <Route path={Profile_URL} component={Profile} />

        <Route path="*">
          <Redirect to={HOME_URL} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
