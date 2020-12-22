import React, { useContext, useEffect } from 'react';
import { JobsContext } from '../../contexts/jobs.context';
import JobsList from '../../components/jobs-list/jobs-list';

export default function Jobs() {
  const { jobs, loaded, getJobs, loading, error } = useContext(JobsContext);

  useEffect(() => {
    console.log('in useEffect', jobs, loaded);
    if (!loaded) {
      getJobs();
    }
  }, [loaded, getJobs, jobs]);

  return (
    <div>
      <h1>Jobs Page</h1>
      <div>
        <JobsList />
      </div>
    </div>
  );
}
