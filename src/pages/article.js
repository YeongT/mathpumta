import React, { useEffect } from 'react';
import $ from 'jquery';

const Article = ({ match }) => {
  const [result, setResult] = React.useState('게시글을 로딩하는 중...');

  useEffect(() => {
    $.ajax({
      url: 'https://java.dimigo.codes/api/article/search',
      data: 'postId=' + match.params.postid,
      type: 'post',
      success: async ({ statusCode, output }) => {
        console.log(output);
        if (statusCode === 200) {
          setResult(output);
        }
      },
    });
  });

  return (
    <>
      <p>Article Info Page</p>
      <p>Article ID : {result.id}</p>
    </>
  );
};

export default Article;
