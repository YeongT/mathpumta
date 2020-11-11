import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/main';
import Article from './pages/article';
import NewArticle from './pages/newArticle';
import Timer from './pages/timer';
import Signup from './pages/signup';

import styled from 'styled-components';
import NavBar from './components/Main/navbar';

const Container = styled.div`
  margin-top: 20px;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PageWrapper = styled.div`
  font-family: 'Sunflower', sans-serif;
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <PageWrapper>
        <Container>
          <NavBar />
          <Route exact path="/" component={Main} />
          <Route path="/feature/timer" component={Timer} />
          <Route path="/article/new" component={NewArticle} />
          <Route path="/article/view" component={Article} />
          <Route path="/auth/signup" component={Signup} />
        </Container>
      </PageWrapper>
    </BrowserRouter>
  );
};

export default App;
