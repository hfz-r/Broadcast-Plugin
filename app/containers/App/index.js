import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import GlobalStyle from '../../global-styles';

export default function App({ ...props }) {
  return (
    <React.Fragment>
      <Switch>
        <Route render={() => <HomePage {...props} />} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  );
}
