import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const LoginForm = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const TitleWrapper = styled.div`
  max-width: '10px';
  margin: auto auto;
`;

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: 'Black Han Sans',
  },
  register: {
    border: 0,
    outline: 0,
    flexDirection: 'column',
    backgroundColor: 'white',
    textAlign: 'right',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const Login = () => {
  const classes = useStyles();
 
  return (
    <div style={{ textAlign: 'center', margin: 'auto auto' }}>
      <LoginForm>
        <TitleWrapper>
          <h1>로그인</h1>
        </TitleWrapper>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            로그인
          </Button>
          <input
            type={'button'}
            value={"Don't have an account? Sign Up"}
            onClick={() => {
              document.location.href = '/auth/signup';
            }}
            className={classes.register}
          />
        </form>
      </LoginForm>
    </div>
  );
};

export default Login;
