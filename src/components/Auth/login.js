import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TitleWrapper from './TitleWrapper';
import LoginHandler from '../InnerAPI/AfterLoginHandler';
import LoginArea from './ContentArea';
import useStyles from './useStyle';

const Login = (props) => {
  const classes = useStyles();
  const [disabled, updateDisabled] = React.useState(false);

  return (
    <div style={{ textAlign: 'center', margin: 'auto' }}>
      <LoginArea>
        <TitleWrapper>
          <h1>로그인</h1>
        </TitleWrapper>
        <div className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label={
              <div style={{ fontFamily: 'Noto Sans KR' }}>이메일 주소</div>
            }
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label={<div style={{ fontFamily: 'Noto Sans KR' }}>비밀번호</div>}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            fullWidth
            disabled={disabled}
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              LoginHandler(props.cookies, updateDisabled);
            }}
          >
            로그인
          </Button>
          <input
            type={'button'}
            value={"Don't have an account? Sign Up"}
            onClick={() => {
              document.location.href = '/auth/signup';
            }}
            className={classes.changeAuthPage}
          />
        </div>
      </LoginArea>
    </div>
  );
};

export default Login;
