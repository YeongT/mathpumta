const ReturnError = (instruction, msg) => {
  return [
    {
      num: 0,
      category: '오류',
      detailed: instruction,
      title: msg,
      author: '관리자',
      difficulty: 500,
      watch: -1,
    },
  ];
};

const SearchOnDatabase = async (category, keyword) => {
  const regex = RegExp('^[ㄱ-ㅎ가-힣a-zA-Z0-9 ]*$');
  if (keyword !== '*' && !regex.test(keyword))
    return ReturnError('입력 값 확인', '입력한 검색어가 올바르지 않습니다');

  return [
    {
      num: 0,
      category: `${category === '*' ? '전체' : category}`,
      detailed: '검색 완료',
      title: keyword,
      author: '관리자',
      difficulty: 0,
      watch: -1,
    },
  ];
};

export default SearchOnDatabase;
