import $ from 'jquery';

const request = async (email, password) => {
  return new Promise(async (resolve) => {
    $.ajax({
      url: `${process.env.REACT_APP_SERVER}/api/account/login`,
      type: 'post',
      beforeSend: (xhr) =>
        xhr.setRequestHeader('Authorization', process.env.REACT_APP_USER_BASIC),
      data: `email=${email}&password=${password}`,
      success: (data) => resolve(data),
      error: (err) => {
        if (err) resolve(err.responseJSON);
      },
    });
  });
};

const onLoginTask = async (cookies, updateDisabled) => {
  const emailRegex = /^[0-9a-zA-Z_\-.]+@[a-zA-Z_\-.]+?\.[a-zA-Z]{2,3}$/,
    passwordRegex = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z]).*$/;

  let email = document.getElementById('email').value,
    password = document.getElementById('password').value;
  if (!emailRegex.test(email) || !passwordRegex.test(password))
    return alert('입력값을 확인하여 주십시오.');

  updateDisabled(true);
  const result = await request(email, password);
  if (!result) alert('서버와 통신할 수 없습니다.');
  else if (result.statusCode === 200) {
    alert('로그인에 성공하였습니다.');
    cookies.set('userEmail', email, { path: '/' });
    document.location.href =
      new URLSearchParams(window.location.search).get('redirect') || '/';
  } else if (result.statusCode === 409)
    alert('아이디/비밀번호를 확인해주세요.');
  else alert('알수없는 오류가 발생했습니다.');
  updateDisabled(false);
};

export default onLoginTask;
