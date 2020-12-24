import React from 'react';
import $ from 'jquery';
import ContentTable from '../components/Main/table';
import sampleData from '../data/sampledata.json';

const Main = () => {
  const [dataSet, setDataSet] = React.useState(sampleData || []);

  $.ajax({
    url: 'https://java.dimigo.codes/api/article/search',
    type: 'post',
    data: 'category=*&keyword=*',
    success: async (data) => {
      console.log(data);
    },
    error: async (err) => {
      console.log(err);
    },
  });

  return <ContentTable dataSet={dataSet} updateDataSet={setDataSet} />;
};

export default Main;
