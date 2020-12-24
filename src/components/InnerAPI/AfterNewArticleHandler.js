import $ from 'jquery';

const onArticleSubmit = async (cookies) => {
  let pictureFiles = [];

  Array.from(
    document.getElementById('pictures').files || ['none']
  ).forEach((element) =>
    pictureFiles.push(window.URL.createObjectURL(element))
  );
  document.getElementById('picturelink').value = pictureFiles;
  document.getElementById('userEmail').value = cookies.get('userEmail');

  const formData = $('#newArticleForm').serialize();
  $.ajax({
    url: `${process.env.REACT_APP_SERVER}/api/article/post`,
    type: 'post',
    data: formData,
    success: async (data) => {
      if (data.statusCode === 200) {
        alert('게시가 완료되었습니다.');
        document.location.href = '/';
      } else if (data.statusCode === 412)
        alert('올바른 데이터를 입력해주세요.');
      else alert('알수없는 에러가 발생했습니다.');
    },

    error: (err) => {
      alert('알수없는 에러가 발생했습니다.');
    },
  });
};

export default onArticleSubmit;
