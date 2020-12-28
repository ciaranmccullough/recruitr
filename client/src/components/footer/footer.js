import React from 'react';

import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: 200,
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar></Toolbar>
    </AppBar>
  );
}
