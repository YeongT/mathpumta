import React from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MathCategorySelecter from '../Main/MathCategoryDropdown';
import newArticleHandler from '../InnerAPI/AfterNewArticleHandler.js';

const InputWrapper = styled.div`
  display: flex;
  padding: 20px 0px;
`;

const InputLabel = styled.label`
  flex-shrink: 0;
  display: flex;
  margin-right: 10px;
`;

const ArticleInput = styled.input`
  flex-grow: 1;
  display: flex;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  margin-left: 10px;
  padding: 0px 5px;
`;

const FileSelecterLabel = styled.label`
  width: 90%;
  text-align: center;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin-right: 10px;
  input {
    font-size: 14px;
    color: gray;
    margin-left: 50px;
  }
  label {
    :hover {
      background-color: '#F5F5F5';
      cursor: pointer;
    }
    margin-left: 20px;
    font-family: 'Noto Sans KR';
    font-weight: bold;
    font-size: 14px;
    padding: 3px 5px;
    border: 2px solid black;
    border-radius: 8px;
  }
  label input {
    margin: 0px;
    padding: 0px;
    width: 0;
    height: 0;
  }
`;

const DifficultyLabel = styled.label`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin-right: 10px;
  div {
    margin-left: 20px;
  }
`;

const PostButton = styled.label`
  font-family: 'Noto Sans KR';
  font-weight: bold;
  font-size: 19px;
  padding: 3px 25px;
  border: 2px solid black;
  border-radius: 8px;
  :hover {
    background-color: '#F5F5F5';
    cursor: pointer;
  }
`;

const ArticleRadioButton = (props) => (
  <FormControlLabel
    {...props}
    control={<Radio color="primary" size="small" />}
    label={
      <span
        style={{
          fontWeight: 'bold',
          fontFamily: 'Noto Sans KR',
          fontSize: '15px',
        }}
      >
        {props.label}
      </span>
    }
  />
);

const textareaNotice =
  "[주의사항]\n한 게시글에 한 질문씩!\n소분류 입력란에는 '도함수의 활용'같은 소단원 명 또는 기출 출처을 기재해주세요.\n비속어를 포함하거나, 페이지 이용목적에 부합하지 않는 게시글은 제제 대상 입니다.";
const RenderArticleForm = (props) => {
  const [fileText, setFileText] = React.useState('선택된 사진이 없습니다.');
  const [difficulty, setdifficulty] = React.useState('MIDDLE');
  return (
    <>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <InputWrapper style={{ width: '80%' }}>
          <InputLabel>게시글 제목 : </InputLabel>
          <ArticleInput
            type="text"
            name="title"
            placeholder="질문의 핵심내용을 입력해주세요"
          />
        </InputWrapper>
        <InputWrapper style={{ marginLeft: '40px' }}>
          <InputLabel>분류 : </InputLabel>
          <MathCategorySelecter />
          <ArticleInput
            style={{ width: '100%' }}
            type="text"
            name="detailed"
            placeholder="소분류"
            maxLength="10"
          />
        </InputWrapper>
      </div>
      <InputWrapper>
        <InputLabel>질문 내용 : </InputLabel>
        <textarea
          style={{
            padding: '10px',
            resize: 'none',
            height: '330px',
            width: '100%',
            fontFamily: 'Noto Sans KR',
          }}
          name="content"
          placeholder={textareaNotice}
        ></textarea>
      </InputWrapper>
      <InputWrapper>
        <FileSelecterLabel aria-disabled>
          게시글 사진 :
          <ArticleInput type="text" disabled value={fileText} />
          <InputLabel>
            파일 선택
            <ArticleInput
              type="file"
              id="pictures"
              accept="image/*"
              onChange={(event) =>
                setFileText(
                  `${event.target.files.length}개의 파일이 선택되었습니다.`
                )
              }
            />
          </InputLabel>
        </FileSelecterLabel>
      </InputWrapper>
      <InputWrapper>
        <DifficultyLabel>
          질문 난이도 :
          <RadioGroup
            row
            name="difficulty"
            value={difficulty}
            onChange={(event) => setdifficulty(event.target.value)}
          >
            <ArticleRadioButton value="VHIGH" label="매우 어려움" />
            <ArticleRadioButton value="LHIGH" label="어려움" />
            <ArticleRadioButton value="MIDDLE" label="무난함" />
            <ArticleRadioButton value="LLOW" label="쉬움" />
            <ArticleRadioButton value="VLOW" label="매우 쉬움" />
          </RadioGroup>
        </DifficultyLabel>
      </InputWrapper>
      <InputWrapper style={{ display: 'flex', justifyContent: 'center' }}>
        <ArticleInput id="picturelink" name="image" type="hidden" />
        <ArticleInput id="userEmail" name="email" type="hidden" />
        <PostButton onClick={() => newArticleHandler(props.cookies)}>게시</PostButton>
      </InputWrapper>
    </>
  );
};

export default RenderArticleForm;
