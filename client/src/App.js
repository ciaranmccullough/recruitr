import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Contexts
import { JobsProvider } from './contexts/jobs.context';
import { MenuProvider } from './contexts/menu.context';

// Pages
import Home from './pages/home/home';
import About from './pages/about/about';
import Jobs from './pages/jobs/jobs';
import Contact from './pages/contact/contact';

function App() {
  return (
    <JobsProvider>
      <MenuProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/jobs' component={Jobs} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </Router>
      </MenuProvider>
    </JobsProvider>
  );
}

export default App;
