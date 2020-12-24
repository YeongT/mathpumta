import React, { useEffect } from 'react';
import $ from 'jquery';
import ContentTable from '../components/Main/table';

const Main = () => {
  const [dataSet, setDataSet] = React.useState([]);
  useEffect(() => {
    setDataSet([
      {
        id: 0,
        category: '안내',
        detailed: '로딩중',
        title: '전체 게시글을 로딩 중입니다.',
        author: '시스템',
        difficulty: 200,
        watch: 0,
      },
    ]);

    $.ajax({
      url: `${process.env.REACT_APP_SERVER}/api/article/search`,
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
