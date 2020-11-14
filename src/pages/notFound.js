import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '30px',
    width: '100%',
    height: '100%',
    alignContent: 'center',
    textAlign: 'center',
  },
}));

const Info = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h1 style={{ marginTop: '50px' }}>404 Not Found</h1>
      <p
        style={{
          textAlign: 'center',
          marginTop: '400px',
          fontSize: '15px',
          fontWeight: 'bold',
        }}
      >
        ⓒ Copyright 2020 Mathpumta All Rights Reserved.
        <br></br>
        'material-ui' implemented to this project.
      </p>
    </div>
  );
};

export default Info;
