const contentColumns = [
  { id: 'id', label: '번', minWidth: '15px', maxWidth: '20px' },
  {
    id: 'category',
    label: '카테고리',
    minWidth: '40px',
    maxWidth: '50px',
    align: 'left',
  },
  {
    id: 'detailed',
    label: '소분류',
    minWidth: '50px',
    maxWidth: '60px',
    align: 'left',
  },
  {
    id: 'title',
    label: '게시글 제목',
    minWidth: '110px',
    maxWidth: '130px',
    align: 'left',
  },
  {
    id: 'email',
    label: '작성자',
    minWidth: '40px',
    maxWidth: '50px',
    align: 'right',
  },
  {
    id: 'difficulty',
    label: '난이도',
    minWidth: '20px',
    maxWidth: '30px',
    align: 'right',
  },
  {
    id: 'watch',
    label: '조회',
    minWidth: '20px',
    maxWidth: '30px',
    align: 'right',
    format: (value) => value + '회',
  },
];

export { contentColumns };
