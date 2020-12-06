import React from 'react';
import styled from 'styled-components';
import NewArticleElement from '../components/Article/NewArticleElement';

const NewArticleWrapper = styled.div`
  margin: 50px 5px;
  margin-top: 20px;
  min-height: 600px;
  text-align: center;
  padding: 60px 70px;
  box-shadow: 0px 0px 8px -5px rgba(0, 0, 0, 1);
`;

const ArticleForm = styled.form`
  margin: 40px 20px 0px 20px;
  font-size: 20px;
`;

const newArticle = () => {
  return (
    <NewArticleWrapper>
      <h1 style={{ width: '100%', textAlign: 'center' }}>수학 질문 하기</h1>
      <ArticleForm
        id="newArticleForm"
        action="/article/new/complete"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <NewArticleElement />
      </ArticleForm>
    </NewArticleWrapper>
  );
};

export default newArticle;
