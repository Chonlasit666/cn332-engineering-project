import React from 'react';

import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { LOGIN_URL, HOME_URL, Createproject_URL, Dashboard_URL, Project_URL} from './urls';

import { Login, Home, Createproject, Dashboard, Project } from '../pages';

export const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={LOGIN_URL} component={Login} />
        <Route path={HOME_URL} component={Home} />
        <Route path={Dashboard_URL} component={Dashboard} />
        <Route path={Project_URL} component={Project} />
        
        <Route path={Createproject_URL} component={Createproject} />
        <Route path="*">
          <Redirect to={HOME_URL} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
