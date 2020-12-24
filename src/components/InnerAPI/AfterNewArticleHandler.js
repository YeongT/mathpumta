import $ from 'jquery';

const onArticleSubmit = async () => {
  let pictureFiles = [];

  Array.from(
    document.getElementById('pictures').files || []
  ).forEach((element) =>
    pictureFiles.push(window.URL.createObjectURL(element))
  );
  document.getElementById('picturelink').value = pictureFiles;

  const formData = $('#newArticleForm').serialize();
  console.log(formData);
};

export default onArticleSubmit;
