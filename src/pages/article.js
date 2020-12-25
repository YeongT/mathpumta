import ArticleView from '../components/Article/ArticleElement';
import styled from 'styled-components';

const AccessDenied = styled.div`
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    margin-top: 40px;
  }

  label {
    align-self: center;
    max-width: 30%;
    margin-top: 30px;
  }
`;

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

const Article = ({ params, cookies }) => {
  return params.postid && params.postid > 0 ? (
    <ArticleView postid={params.postid} cookies={cookies} />
  ) : (
    <AccessDenied>
      <h1>접근이 불가능한 게시글 입니다.</h1>
      <RedirectHome onClick={() => (document.location.href = '/')}>
        홈으로 돌아가기
      </RedirectHome>
    </AccessDenied>
  );
};

export default Article;
