import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import TitleWrapper from './TitleWrapper';
import SignUpHandler from '../InnerAPI/AfterSignupHandler';
import SignUpArea from './ContentArea';
import useStyles from './useStyle';

const SignUp = () => {
  const classes = useStyles();

  const [schoolError, setSchoolError] = React.useState(true);
  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordChkError, setPasswordChkError] = React.useState(false);

  const ErrorHandler = (object) => {
    const emailRegex = /^[0-9a-zA-Z_\-.]+@[a-zA-Z_\-.]+?\.[a-zA-Z]{2,3}$/,
      passwordRegex = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z]).*$/,
      schoolRegex = /^[ㄱ-ㅎㅏ-ㅣ가-힣 ]{3,20}/,
      nameRegex = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-1 ]{3,15}/;
    setSchoolError(!schoolRegex.test(document.getElementById('school').value));
    setNameError(!nameRegex.test(document.getElementById('userName').value));
    setEmailError(!emailRegex.test(document.getElementById('email').value));
    setPasswordError(
      !passwordRegex.test(document.getElementById('password').value)
    );
    setPasswordChkError(
      !(
        document.getElementById('password').value &&
        document.getElementById('password').value ===
          document.getElementById('password_chk').value
      )
    );
  };

  return (
    <div style={{ textAlign: 'center', margin: 'auto' }}>
      <SignUpArea>
        <TitleWrapper>
          <h1>회원가입</h1>
        </TitleWrapper>
        <div className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <TextField
                onChange={ErrorHandler}
                helperText={
                  <div style={{ fontFamily: 'Noto Sans KR' }}>
                    {schoolError
                      ? '3자 이상의 한글,띄어쓰기로 구성된 학교이름을 입력해주세요.'
                      : ''}
                  </div>
                }
                name="school"
                variant="outlined"
                color="secondary"
                fullWidth
                id="school"
                label={<div style={{ fontFamily: 'Noto Sans KR' }}>학교</div>}
                autoFocus
                error={schoolError}
              />
            </Grid>
            <Grid item xs={12} sm={2}></Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                onChange={ErrorHandler}
                helperText={
                  <div style={{ fontFamily: 'Noto Sans KR' }}>
                    {nameError ? '3자~15자로 구성된 이름을 입력해주세요.' : ''}
                  </div>
                }
                variant="outlined"
                color="secondary"
                fullWidth
                id="userName"
                type="name"
                label={<div style={{ fontFamily: 'Noto Sans KR' }}>이름</div>}
                name="userName"
                error={nameError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={ErrorHandler}
                helperText={
                  <div style={{ fontFamily: 'Noto Sans KR' }}>
                    {emailError ? '올바른 이메일주소를 입력해주세요.' : ''}
                  </div>
                }
                style={{ fontFamily: 'Noto Sans KR' }}
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
                error={emailError}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={ErrorHandler}
                helperText={
                  <div style={{ fontFamily: 'Noto Sans KR' }}>
                    {passwordError
                      ? '6~15자의 영문자,숫자로만 이루어진 비밀번호를 입력해주세요.'
                      : ''}
                  </div>
                }
                color="secondary"
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label={
                  <div style={{ fontFamily: 'Noto Sans KR' }}>비밀번호</div>
                }
                type="password"
                id="password"
                autoComplete="current-password"
                error={passwordError}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={ErrorHandler}
                helperText={
                  <div style={{ fontFamily: 'Noto Sans KR' }}>
                    {passwordChkError
                      ? '비밀번호와 비밀번호 확인이 일치하지 않습니다.'
                      : ''}
                  </div>
                }
                color="secondary"
                variant="outlined"
                margin="normal"
                fullWidth
                name="password2 "
                label={
                  <div style={{ fontFamily: 'Noto Sans KR' }}>
                    비밀번호 확인
                  </div>
                }
                type="password"
                id="password_chk"
                error={passwordChkError}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={SignUpHandler}
            disabled={
              schoolError ||
              nameError ||
              emailError ||
              passwordChkError ||
              passwordChkError
            }
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
