const columns = [
  { id: 'num', label: '번', minWidth: 10 },
  { id: 'category', label: '카테고리', minWidth: 30, align: 'center' },
  { id: 'detailed', label: '소분류', minWidth: 100, align: 'center' },
  {
    id: 'title',
    label: '게시글 제목',
    minWidth: 20,
    align: 'center',
  },
  {
    id: 'author',
    label: '작성자',
    minWidth: 50,
    align: 'right',
  },
  {
    id: 'watch',
    label: '조회',
    minWidth: 30,
    align: 'right',
    format: (value) => value + '회',
  },
];

export default columns;
