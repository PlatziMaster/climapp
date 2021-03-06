import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '@containers/Home';
import Login from '@containers/Login';
import Dashboard from '@containers/Dashboard';
import NotFound from '@containers/NotFound';

import { AppContext, useContextApp } from '@context/AppContext';

const App = () => {
  const initialState = useContextApp();
  const isLogin = false;

  const RequireAuth = ({ children }) => {
    if (!isLogin) {
      return <Redirect to="/login" />
    }
    return children
  }

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {isLogin ? <Redirect to="/dashboard" /> : <Home />}
          </Route>
          <Route exact path="/login">
            {isLogin ? <Redirect to="/dashboard" /> : <Login />}
          </Route>
          <RequireAuth>
            <Route exact path="/dashboard" component={Dashboard} />
          </RequireAuth>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
};

export default App;