import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import PageFrame from '../../components/page-frame/page-frame';
import Footer from '../../components/footer/footer';

import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Grid,
  Paper,
  CardMedia,
} from '@material-ui/core/';

const useStyles = makeStyles({
  hero: {
    background:
      'url(https://images.unsplash.com/photo-1590105577767-e21a1067899f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80) no-repeat center center',
    minHeight: '90vh',
    maxWidth: 1280,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitle: {
    color: '#fff',
    minWidth: '80%',
  },
  grid: {
    display: 'flex',
  },
  paper: {},
});

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Card className={classes.hero}>
        <CardContent>
          <Typography variant='h1' className={classes.heroTitle} align='center'>
            Archway Talent Solutions
          </Typography>
        </CardContent>
      </Card>
      <PageFrame>
        <Typography variant='h2'>About Us</Typography>
        <div className={classes.grid}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant='h4' align='center'>
                Talent Sourcing
              </Typography>
              {/* <CardMedia
                className={classes.media}
                image='../../img/talent.webp'
                title='talent'
              /> */}
              <Typography variant='p' align='center'>
                Sourcing and hiring Top Talent that will make a difference to
                your company.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant='h4' align='center'>
                Find your dream job
              </Typography>
              <Typography variant='p' align='center'>
                Listening to your needs to match you with your Forever-job!
              </Typography>
            </Paper>
          </Grid>
        </div>
      </PageFrame>
      <Footer />
    </>
  );
}
