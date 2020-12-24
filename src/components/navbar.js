import React from 'react';
import styled from 'styled-components';

const Title = styled.a`
  padding: 0 5px;
  text-decoration: none;
  :link {
    color: black;
  }
  :visited {
    color: black;
  }
  :hover {
    color: black;
  }
  :active {
    color: black;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavButton = styled.button`
  background-color: white;
  align-items: center;
  font-family: 'Black Han Sans';
  width: 100px;
  min-width: 70px;
  padding: 5px;
  margin: 0 4px;
  border: solid 2px black;
  border-radius: 5px;
  :hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;

const NavBar = ({ cookies }) => {
  return (
    <ButtonWrapper>
      <InnerWrapper>
        <Title href="/" width="120" height="80">
          <h2>Mathpumta</h2>
        </Title>
        <NavButton
          onClick={() => {
            document.location.href = '/';
          }}
          style={{ marginLeft: '30px' }}
        >
          메인 페이지
        </NavButton>
        <NavButton
          onClick={() => {
            document.location.href = '/feature/timer';
          }}
        >
          타이머
        </NavButton>
        <NavButton
          onClick={() => {
            document.location.href = '/info';
          }}
        >
          정보
        </NavButton>
      </InnerWrapper>
      <InnerWrapper>
        {cookies.get('userEmail') ? (
          <>
            <p style={{ fontWeight: 'bold', marginRight: '5px' }}>
              다음유저로 로그인 됨: &nbsp;
            </p>
            <p style={{ fontSize: '12sp', marginRight: '10px' }}>
              {cookies.get('userEmail')}
            </p>
            <NavButton
              onClick={() => {
                alert('로그아웃 되었습니다.');
                cookies.remove('userEmail', { path: '/' });
              }}
            >
              로그아웃
            </NavButton>
          </>
        ) : (
          <>
            <NavButton
              onClick={() => {
                document.location.href = '/auth/signup';
              }}
            >
              회원가입
            </NavButton>
            <NavButton
              onClick={() => {
                document.location.href = '/auth/login';
              }}
            >
              로그인
            </NavButton>
          </>
        )}
      </InnerWrapper>
    </ButtonWrapper>
  );
};

export default NavBar;
