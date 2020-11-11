import React from 'react';

import ContentTable from '../components/Main/table';
import sampleData from '../data/sampledata.json';

const Main = () => {
  const [dataSet, setDataSet] = React.useState(sampleData || []);

  return <ContentTable dataSet={dataSet} updateDataSet={setDataSet} />;
};

export default Main;
