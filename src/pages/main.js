import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/navbar';
import ContentTable from '../components/table';

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const NoticeText = styled.h2`
  text-align: center;
`;

const Main = () => {
  return (
    <PageWrapper>
      <Container>
        <NavBar />
        <NoticeText>공지 사항 들어갈 곳이구요~</NoticeText>
        <ContentTable />
      </Container>
    </PageWrapper>
  );
};

export default Main;
