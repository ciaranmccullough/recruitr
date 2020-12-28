import React, { useContext, useEffect } from 'react';
import { JobsContext } from '../../contexts/jobs.context';
import JobsList from '../../components/jobs-list/jobs-list';
// Components
import Header from '../../components/header/header';
import PageFrame from '../../components/page-frame/page-frame';
import Footer from '../../components/footer/footer';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default function Jobs() {
  const { jobs, loaded, getJobs, loading, error } = useContext(JobsContext);
  const classes = useStyles();

  useEffect(() => {
    console.log('in useEffect', jobs, loaded);
    if (!loaded) {
      getJobs();
    }
  }, [loaded, getJobs, jobs]);

  return (
    <div className={classes.root}>
      <Header />
      <PageFrame>
        <h1>Jobs Page</h1>
        <JobsList />
      </PageFrame>
      <Footer />
    </div>
  );
}
