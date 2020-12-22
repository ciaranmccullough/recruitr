import React, { createContext, useState } from 'react';

export const RecruitersContext = createContext({
  getRecruiters: () => [],
  loaded: false,
  loading: false,
  error: null,
  recruiters: [],
});

export function RecruitersProvider(props) {
  const [recruiters, setRecruiters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  async function getRecruiters() {
    if (loading || loaded || error) {
      return;
    } else {
      setLoading(true);
    }
    try {
      const response = await fetch('/api/v1/recruiters');
      if (response.status !== 200) {
        throw response;
      }
      const data = await response.json();
      setRecruiters(data);
    } catch (err) {
      setError(err.message || err.statusText);
    } finally {
      setLoading(false);
      setLoaded('true');
    }
  }
  return (
    <RecruitersContext.Provider
      value={{
        recruiters,
        loading,
        error,
        getRecruiters,
      }}
    >
      {props.children}
    </RecruitersContext.Provider>
  );
}
