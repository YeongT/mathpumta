import $ from 'jquery';

const ReturnError = (instruction, msg, code) => {
  return [
    {
      id: 0,
      category: '오류',
      detailed: instruction,
      title: msg,
      email: '관리자',
      difficulty: code,
      watch: -1,
    },
  ];
};

const SearchOnDatabase = async (category, keyword) => {
  const regex = RegExp('^[ㄱ-ㅎ가-힣ㅏ-ㅣa-zA-Z0-9 ]*$');

  if (keyword !== '*' && !regex.test(keyword))
    return ReturnError(
      '입력 값 확인',
      '입력한 검색어가 올바르지 않습니다',
      412
    );

  const request = async () => {
    console.log(category);
    return new Promise(async (resolve) => {
      $.ajax({
        url: 'https://java.dimigo.codes/api/article/search',
        type: 'post',
        data: `category=${category}&keyword=${keyword}`,
        success: ({ statusCode, output }) => {
          if (statusCode === 200) resolve(output);
          if (statusCode === 409)
            resolve(
              ReturnError(
                '결과 없음',
                '해당 조건을 만족하는 게시글이 없습니다.',
                404
              )
            );
          resolve(
            ReturnError(
              '에러 발생',
              '서버에서 전송된 데이터가 비정상입니다.',
              500
            )
          );
        },
        error: (err) => {
          resolve(
            ReturnError('에러 발생', 'Server :' + err.responseJSON.error, 500)
          );
        },
      });
    });
  };

  return await request();
};

export default SearchOnDatabase;
