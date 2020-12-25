import styled from 'styled-components';

const ViewTitle = styled.h1``;

const ViewElement = styled.div`
  margin: 30px 20px;
  display: flex;
  flex-direction: row;
`;

const ElementLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  font-family: 'Stylish';
`;

const ElementData = styled.input``;

const Article = ({ cookies, resultSet }) => {
  const resultSet1 = {
    category: '전체',
    content: '오류 수정 확인 게시글 입니다.',
    detailed: '오류정정',
    difficulty: 'MIDDLE',
    email: '윤영창(관리자)',
    id: 3,
    image: 'blob:http://localhost:3000/542b15b4-1903-4eab-a463-aaad914ae138',
    title: '테스트 게시글 입니다.',
    watch: 0,
  };

  return (
    <>
      <ViewElement>
        <ViewTitle>{resultSet1.title}</ViewTitle>
      </ViewElement>
      <ViewElement>
        <ElementLabel></ElementLabel>
        <ElementData></ElementData>
      </ViewElement>
      <ViewElement>
        <ElementLabel></ElementLabel>
        <ElementData></ElementData>
      </ViewElement>
      <ViewElement>
        <ElementLabel></ElementLabel>
        <ElementData></ElementData>
      </ViewElement>
      <ViewElement>
        <ElementLabel></ElementLabel>
        <ElementData></ElementData>
      </ViewElement>
      <ViewElement>
        <ElementLabel></ElementLabel>
        <ElementData></ElementData>
      </ViewElement>
    </>
  );
};

export default Article;
