import React, { createContext, useState, useContext } from 'react';

export const JobsContext = createContext({
  getJobs: () => [],
  addJob: () => {},
  updateJob: () => {},
  deleteJob: () => {},
  loaded: false,
  loading: false,
  error: null,
  jobs: [],
});

export const JobsProvider = (props) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  // const [search, setSearch] = useState("");

  const getJobs = async () => {
    // console.log('loading', loading);
    // console.log('error', error);
    if (loading || loaded || error) {
      return;
    } else {
      setLoading(true);
    }
    try {
      const response = await fetch('http://localhost:5000/api/v1/jobs');
      if (response.status !== 200) {
        throw response;
      }
      const data = await response.json();
      setJobs(data);
      setLoading(false);
      console.log('jobs from context', jobs);
    } catch (err) {
      setError(err.message || err.statusText);
    } finally {
      setLoading(false);
      setLoaded('true');
    }
  };

  const addJob = async (formData) => {
    try {
      const response = await fetch('/api/v1/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(formData),
      });
      // if (response.status !== 201) {
      //   throw response;
      // }
      const savedJob = await response.json();

      console.log('got data', savedJob);
      setJobs([...jobs, savedJob]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateJob = async (id, updates, fullOwner) => {
    console.log('here', id, updates);
    let newJob = null;
    try {
      const response = await fetch(`/api/v1/jobs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(updates),
      });
      if (response.status !== 200) {
        throw response;
      }
      // Get index
      const index = jobs.findIndex((job) => job._id === id);

      // Get actual job
      const oldJob = jobs[index];
      console.log('here', oldJob);
      // Merge with updates
      newJob = {
        ...oldJob,
        ...updates, // order here is important for the override!!
      };

      // this is a bit sketchy, but shouldn't go out of line
      if (typeof newJob.owner === 'string') {
        newJob.owner = fullOwner;
      }

      console.log('here', newJob);
      // recreate the jobs array
      const updatedJobs = [
        ...jobs.slice(0, index),
        newJob,
        ...jobs.slice(index + 1),
      ];

      setJobs(updatedJobs);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteJob = async (id) => {
    let deletedJob = null;
    try {
      const response = await fetch(`/api/v1/jobs/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      if (response.status !== 204) {
        throw response;
      }
      // Get index
      const index = jobs.findIndex((job) => job._id === id);
      deletedJob = jobs[index];
      // recreate the jobs array without that job
      const updatedJobs = [...jobs.slice(0, index), ...jobs.slice(index + 1)];
      await setJobs(updatedJobs);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <JobsContext.Provider
      value={{
        jobs,
        loaded,
        loading,
        error,
        getJobs,
        addJob,
        updateJob,
        deleteJob,
      }}
    >
      {props.children}
    </JobsContext.Provider>
  );
};
