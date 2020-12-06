import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const MenuItemSpan = ({ label }) => (
  <span
    style={{
      fontWeight: 'bold',
      fontFamily: 'Poor Story',
      fontSize: '15px',
    }}
  >
    {label}
  </span>
);

const MathCategorySelecter = ({ updateCategory }) => {
  const [category, setCategory] = React.useState('*');

  return (
    <Select
      style={{
        fontWeight: 'bold',
        fontSize: '15px',
        margin: '0 3px 0 10px',
        fontFamily: 'Poor Story',
      }}
      value={category}
      onChange={(event) => {
        setCategory(event.target.value);
        if (updateCategory !== undefined) updateCategory(event.target.value);
      }}
    >
      <MenuItem value="*">
        <MenuItemSpan label="전체" />
      </MenuItem>
      <MenuItem value="math1">
        <MenuItemSpan label="수I" />
      </MenuItem>
      <MenuItem value="math2">
        <MenuItemSpan label="수II" />
      </MenuItem>
      <MenuItem value="math3">
        <MenuItemSpan label="미적분" />
      </MenuItem>
      <MenuItem value="math4">
        <MenuItemSpan label="수(상)" />
      </MenuItem>
      <MenuItem value="math5">
        <MenuItemSpan label="수(하)" />
      </MenuItem>
      <MenuItem value="math6">
        <MenuItemSpan label="중등수학" />
      </MenuItem>
      <MenuItem value="math7">
        <MenuItemSpan label="초등수학" />
      </MenuItem>
    </Select>
  );
};

export default MathCategorySelecter;
