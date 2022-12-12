import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import { Route } from "react-router-dom";
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import AboutUs from './pages/AboutUs.js'
import GetStarted from './pages/GetStarted.js'
import ExploreMeals from './pages/ExploreMeals.js'

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';


const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/get-started">
            <GetStarted />
          </Route>
          <Route path="/explore-meals">
            <ExploreMeals />
          </Route>
        </Switch>
      )} />
      </>
  );
}

export default App;