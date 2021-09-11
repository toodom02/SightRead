import React from 'react';
import './App.css';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Layout } from './Components/Layout';
import { NavBar } from './Components/NavBar';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename="/SightRead">
        <NavBar />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/404" component={NoMatch} />
            <Redirect to="/404" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
