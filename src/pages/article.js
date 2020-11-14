import React from 'react';

const Article = ({ match }) => {
  return (
    <>
      <p>Article Info Page</p>
      <p>Article ID : {match.params.postid}</p>
    </>
  );
};

export default Article;
