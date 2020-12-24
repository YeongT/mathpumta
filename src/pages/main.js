import React, { useEffect } from 'react';
import $ from 'jquery';
import ContentTable from '../components/Main/table';

const Main = () => {
  const [dataSet, setDataSet] = React.useState([]);

  useEffect(() => {
    $.ajax({
      url: 'https://java.dimigo.codes/api/article/search',
      type: 'post',
      data: 'category=*&keyword=*',
      success: (data) => {
        setDataSet(data.output || []);
      },
    });
  }, []);

  return <ContentTable dataSet={dataSet} updateDataSet={setDataSet} />;
};

export default Main;
