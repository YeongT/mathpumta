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
      <h1>Math</h1>
      <h1>+</h1>
      <h1>Timer</h1>
      <h1>=</h1>
      <h1>MathPumta</h1>
      <br></br>
      <h2>Study With Your Friends</h2>
      <h2>Share Your Math Solve Procedure</h2>
      <br></br>
      <h3>Learn Math in Web</h3>
      <h3>Apply To Your Life</h3>
      <br></br>
      <p style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>
        ⓒ Copyright 2020 Mathpumta All Rights Reserved.
        <br></br>
        'material-ui' implemented to this project.
      </p>
    </div>
  );
};

export default Info;
