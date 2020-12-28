import React, { useContext } from 'react';
import { JobsContext } from './../../contexts/jobs.context';

import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: '1rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
});

const JobListItem = () => {
  const { jobs } = useContext(JobsContext);
  const classes = useStyles();

  return (
    <>
      {jobs.map((job) => (
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant='h2'>
              {job.title}
            </Typography>
            <Typography variant='h5'>
              <strong>Location: </strong>
              {job.location}
            </Typography>
            <Typography variant='p'>
              <strong>Posted: </strong> {job.posted}
            </Typography>
            <Typography variant='p'>
              <strong>Salary: </strong>
              {job.salary}
            </Typography>
            <Typography variant='p'>
              <strong>Agency: </strong>
              {job.agency}
            </Typography>
            <Typography variant='p'>
              <strong>Description: </strong>
              {job.description}
            </Typography>
            <Typography variant='p'>
              <strong>Job Type: </strong>
              {job.job_type}
            </Typography>
            <Typography variant='p'>
              <strong>Start Date: </strong>
              {job.start_date}
            </Typography>
            <Typography variant='p'>
              <strong>Contract Length:</strong> {job.contract_length}
            </Typography>
            <Typography className={classes.pos} variant='p'>
              <strong>Contact:</strong> {job.contact_name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default JobListItem;
