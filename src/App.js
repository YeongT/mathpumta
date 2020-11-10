import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/main';
import Sample from './pages/sample';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Main} />
      <Route path="/main" component={Main} />
      <Route path="/timer" component={Main} />
      <Route path="/info" component={Main} />
      <Route path="/newarticle" component={Main} />
      <Route path="/article" component={Main} />
      <Route path="/sample" component={Sample} />
    </BrowserRouter>
  );
};

export default App;
