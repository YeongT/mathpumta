import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Main from './pages/main';
import Article from './pages/article';
import NewArticle from './pages/newArticle';
import NotFoundPage from './pages/notFound';
import Timer from './pages/timer';
import Info from './pages/info';
import Signup from './components/Auth/signup';
import Login from './components/Auth/login';
import styled from 'styled-components';
import NavBar from './components/navbar';
import { withCookies } from 'react-cookie';

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

const App = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <PageWrapper>
        <Container>
          <NavBar cookies={props.cookies} />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/feature/timer" component={Timer} />
            <Route
              path="/article/new"
              component={() => <NewArticle cookies={props.cookies} />}
            />
            <Route
              path="/article/view/:postid"
              component={({ match }) => (
                <Article params={match.params} cookies={props.cookies} />
              )}
            />
            <Route path="/auth/signup" component={Signup} />
            <Route
              path="/auth/login"
              render={() => <Login cookies={props.cookies} />}
            />
            <Route path="/info" component={Info} />
            <Route path="/error/404" component={NotFoundPage} />
            <Redirect to="/error/404" />
          </Switch>
        </Container>
      </PageWrapper>
    </BrowserRouter>
  );
};

export default withCookies(App);
