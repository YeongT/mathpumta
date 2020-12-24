import $ from 'jquery';

const onSignUpTask = async (e1, e2, e3, e4, e5) => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('userName').value;
  const school = document.getElementById('school').value;

  if (e1 || e2 || e3 || e4 || e5) return alert('입력값을 확인해주세요.');
  const request = async () => {
      return new Promise(async (resolve) => {
        $.ajax({
          url: `${process.env.REACT_APP_SERVER}/api/account/new`,
          type: 'post',
          beforeSend: (xhr) =>
            xhr.setRequestHeader(
              'Authorization',
              process.env.REACT_APP_USER_BASIC
            ),
          data: `email=${email}&password=${password}&name=${name}&school=${school}`,
          success: ({ statusCode, output }) =>
            resolve({ statusCode: statusCode, output: output }),
          error: ({ responseJSON }) =>
            resolve({
              statusCode: responseJSON.statusCode,
              output: responseJSON.output,
            }),
        });
      });
    },
    result = await request();

  if (result.statusCode === 200) {
    alert('회원가입에 성공하였습니다.');
    document.location.href = '/auth/login/';
  } else if (result.statusCode === 409) alert('이메일 중복입니다.');
  else alert('알수없는 오류가 발생했습니다.');
};
export default onSignUpTask;
