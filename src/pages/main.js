import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/navbar';
import ContentTable from '../components/table';
import sampleData from '../data/sampledata.json';

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
  const [dataSet, setDataSet] = React.useState(sampleData || []);

  return (
    <PageWrapper>
      <Container>
        <NavBar />
        <ContentTable dataSet={dataSet} update={setDataSet} />
      </Container>
    </PageWrapper>
  );
};

export default Main;
