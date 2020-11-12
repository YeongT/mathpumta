import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TitleWrapper from './TitleWrapper';
import SignUpHandler from '../InnerAPI/AfterSignupHandler';
import SignUpArea from './ContentArea';
import useStyles from './useStyle';

const SignUp = () => {
  const classes = useStyles();

  return (
    <div style={{ textAlign: 'center', margin: 'auto' }}>
      <SignUpArea>
        <TitleWrapper>
          <h1>회원가입</h1>
        </TitleWrapper>
        <div className={classes.form}>
          <TextField
            color="secondary"
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
            color="secondary"
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
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={SignUpHandler}
          >
            회원가입
          </Button>
          <input
            type={'submit'}
            color="secondary"
            value={'Already have an account? Sign in'}
            onClick={() => {
              document.location.href = '/auth/login';
            }}
            className={classes.changeAuthPage}
          />
        </div>
      </SignUpArea>
    </div>
  );
};

export default SignUp;
