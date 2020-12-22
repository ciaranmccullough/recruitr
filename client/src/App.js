import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Contexts
import { RecruitersProvider } from './contexts/recruiters.context';
import { JobsProvider } from './contexts/jobs.context';
import { MenuProvider } from './contexts/menu.context';

// Pages
import Home from './pages/home/home';
import Recruiters from './pages/recruiters/recruiters';
import Jobs from './pages/jobs/jobs';

function App() {
  return (
    <>
      <RecruitersProvider>
        <JobsProvider>
          <MenuProvider>
            <Router>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/jobs' component={Jobs} />
                <Route exact path='/recruiters' component={Recruiters} />
              </Switch>
            </Router>
          </MenuProvider>
        </JobsProvider>
      </RecruitersProvider>
    </>
  );
}

export default App;
