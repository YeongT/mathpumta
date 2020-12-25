import React from 'react';
import styled from 'styled-components';
import NewArticleElement from '../components/Article/NewArticleElement';

const NewArticleWrapper = styled.div`
  margin: 30px 5px;
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

const AccessDeniedForm = styled.div`
  width: 100%;
  height: 100%;
  align-content: center;
  text-align: center;
`;

const RedirectLogin = styled.label`
  margin-top: 100px;
  font-family: 'Noto Sans KR';
  font-weight: bold;
  font-size: 19px;
  padding: 3px 20px;
  border: 2px solid black;
  border-radius: 8px;
  :hover {
    background-color: '#F5F5F5';
    cursor: pointer;
  }
`;

const newArticle = ({ cookies }) => {
  return (
    <NewArticleWrapper>
      {cookies.get('userEmail') ? (
        <>
          <h1 style={{ width: '100%', textAlign: 'center' }}>수학 질문 하기</h1>
          <ArticleForm
            id="newArticleForm"
            action="/article/new/complete"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <NewArticleElement cookies={cookies} />
          </ArticleForm>
        </>
      ) : (
        <AccessDeniedForm>
          <h1>로그인 후 이용 가능합니다.</h1>
          <RedirectLogin
            onClick={() =>
              (document.location.href = '/auth/login?redirect=/article/new')
            }
          >
            로그인 하러 가기
          </RedirectLogin>
        </AccessDeniedForm>
      )}
    </NewArticleWrapper>
  );
};

export default newArticle;
