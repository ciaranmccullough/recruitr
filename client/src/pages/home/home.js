import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Header from '../../components/header/header';
import PageFrame from '../../components/page-frame/page-frame';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PageFrame>
          <h1>Home Page</h1>
          <Button
            component={Link}
            to='/jobs'
            variant='contained'
            color='secondary'
            size='small'
          >
            Jobs
          </Button>
          <Button
            component={Link}
            to='/recruiters'
            variant='contained'
            color='primary'
            size='small'
          >
            Recruiters
          </Button>
        </PageFrame>
      </main>
    </>
  );
}
