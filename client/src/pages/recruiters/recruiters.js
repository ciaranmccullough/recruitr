import React, { useContext } from 'react';
import { RecruitersContext } from '../../contexts/recruiters.context';

export default function Recruiters() {
  const { recruiters } = useContext(RecruitersContext);
  return (
    <>
      <div>
        <h1>Recruiters</h1>
        {console.log(recruiters)}
        {recruiters.map((recruiter) => (
          <p>{recruiter.title}</p>
        ))}
      </div>
    </>
  );
}
