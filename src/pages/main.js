import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/navbar';
import ContentTable from '../components/table';

import data from '../sampledata.json';

const Container = styled.div`
  margin-top: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = () => {
  return (
    <PageWrapper>
      <Container>
        <NavBar />
        <ContentTable dataSet={data} />
      </Container>
    </PageWrapper>
  );
};

export default Main;
