import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: 'Black Han Sans',
  },
  changeAuthPage: {
    marginTop: '60px',
    border: 0,
    outline: 0,
    flexDirection: 'column',
    backgroundColor: 'white',
    textAlign: 'right',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
