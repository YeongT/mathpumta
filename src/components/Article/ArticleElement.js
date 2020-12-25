import styled from 'styled-components';
import React, { useEffect } from 'react';
import Article from './ArticleView';
import $ from 'jquery';

const RedirectHome = styled.label`
  font-family: 'Noto Sans KR';
  font-weight: bold;
  font-size: 17px;
  padding: 3px 20px;
  border: 2px solid black;
  border-radius: 8px;
  :hover {
    cursor: pointer;
  }
`;

const ArticleView = styled.div`
  margin: 20px 5px;
  margin-top: 20px;
  min-height: 600px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 70px;
  box-shadow: 0px 0px 8px -5px rgba(0, 0, 0, 1);
`;

const RenderArticleView = ({ cookies, postid }) => {
  const [resultSet, setResultSet] = React.useState(null);
  useEffect(() => {
    $.ajax({
      url: `${process.env.REACT_APP_SERVER}/api/article/search`,
      type: 'post',
      data: `postId=${postid}`,
      success: (data) => {
        if (data && data.statusCode === 200) setResultSet(data.output);
        else setResultSet(undefined);
      },
      error: (error) => {
        setResultSet(undefined);
      },
    });
  }, [postid]);

  return (
    <ArticleView>
      {!resultSet ? (
        resultSet === null ? (
          <h1>로딩중...</h1>
        ) : (
          <>
            <h1>게시글 로딩중 에러발생</h1>
            <RedirectHome onClick={() => (document.location.href = '/')}>
              홈으로 돌아가기
            </RedirectHome>
          </>
        )
      ) : (
        <Article cookies={cookies} resultSet={resultSet} />
      )}
    </ArticleView>
  );
};

export default RenderArticleView;
