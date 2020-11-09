import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/main';
import Sample from './pages/sample';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route path="/sample" render={() => <Sample />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
