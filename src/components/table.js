import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  FormControlLabel,
  Switch,
} from '@material-ui/core';

import { getComparator, stableSort } from './SortHandler';
import EnhancedTableHead from './EnhancedTableHead';
import TableSearchHandle from '../data/TableSearchHandler.js';
import { contentColumns } from '../data/contentTableColumn';

const UpperContainer = styled.div`
  font-family: 'Poor Story';
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const BottomContainer = styled.div``;

const SearchBox = styled.div`
  text-align: right;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Sunflower !important',
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  container: {
    height: '550px',
  },
  searchFormControl: {
    marginTop: '10px',
    maxHeight: '25px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  writeButton: {
    minWidth: '80px',
    maxHeight: '37px',
    fontFamily: 'Black Han Sans',
    backgroundColor: '#568ae3',
    color: 'white',
    fontSize: '14px',
    marginRight: '20px',
  },
  input: { fontFamily: 'Black Han Sans' },
}));

const StickyHeadTable = (props) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [category, setCategory] = React.useState('keyword');
  // eslint-disable-next-line no-unused-vars
  const [searchQuery, setSearchQuery] = React.useState('');

  let dataSet = props.dataSet;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, dataSet.length - page * rowsPerPage);

  return (
    <Paper className={classes.paper}>
      <UpperContainer>
        <FormControl className={classes.searchFormControl}>
          <FormControlLabel
            style={{
              maxWidth: '170px',
              maxHeight: '50px',
              margin: '5px 0px 0px 20px',
            }}
            control={
              <Switch
                color="primary"
                checked={dense}
                onChange={handleChangeDense}
              />
            }
            label={
              <p
                style={{
                  fontFamily: 'Noto Sans KR',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                짧은 행 보기
              </p>
            }
          />
          <SearchBox>
            <Select
              style={{ marginRight: '15px', fontFamily: 'Poor Story' }}
              value={category}
              onChange={(x) => {
                setCategory(x.target.value);
              }}
            >
              <MenuItem style={{ paddingBottom: '0px' }} value={'keyword'}>
                분류
              </MenuItem>
              <MenuItem value={'math1'}>수I</MenuItem>
              <MenuItem value={'math2'}>수II</MenuItem>
              <MenuItem value={'math3'}>미적분</MenuItem>
              <MenuItem value={'math4'}>수(상)</MenuItem>
              <MenuItem value={'math5'}>수(하)</MenuItem>
              <MenuItem value={'math6'}>중등수학</MenuItem>
              <MenuItem value={'math7'}>초등수학</MenuItem>
            </Select>
            <InputBase
              className={classes.input}
              placeholder="검색어"
              inputProps={{ 'aria-label': '검색어' }}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onKeyPress={async (e) => {
                if (e.key === 'Enter') {
                  props.update(TableSearchHandle(category, e.target.value));
                }
              }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </SearchBox>
        </FormControl>
      </UpperContainer>
      <TableContainer className={classes.container}>
        <Table
          aria-labelledby="tableTitle"
          size={dense ? 'small' : 'medium'}
          aria-label="enhanced table"
        >
          <EnhancedTableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            contentColumns={contentColumns}
            rowCount={dataSet.length}
          />
          <TableBody>
            {stableSort(dataSet, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover key={row.num} style={{ maxHeight: '10px' }}>
                    {contentColumns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: (dense ? 33 : 43) * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <caption>
            수학과 상관없는 게시글,댓글은 사전통보없이 삭제되며,<br></br>
            해당 게시글,댓글을 업로드한 회원은 영구정지 조치 됩니다.
          </caption>
        </Table>
      </TableContainer>
      <BottomContainer>
        <Button
          variant="contained"
          onClick={() => {
            document.location.href = '/new/article';
          }}
          className={classes.writeButton}
        >
          글쓰기
        </Button>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 75, 100]}
          component="div"
          count={dataSet.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </BottomContainer>
      <p style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>
        ⓒ Copyright 2020 Mathpumta
      </p>
    </Paper>
  );
};

export default StickyHeadTable;
