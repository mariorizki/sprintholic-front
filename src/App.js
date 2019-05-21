import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={`/`} component={Login} />
        <Route path={`/dashboard`} component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
