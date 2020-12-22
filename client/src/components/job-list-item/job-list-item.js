import React, { useContext } from 'react';
import { JobsContext } from './../../contexts/jobs.context';

const JobListItem = () => {
  const { jobs } = useContext(JobsContext);

  return (
    <div>
      {jobs.map((job) => (
        <>
          <h1>{job.title}</h1>
          <p>{job.salary}</p>
        </>
      ))}
    </div>
  );
};

export default JobListItem;
