import React from 'react';
import loadable from '@loadable/component';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { NavBar } from './components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// const OtherComponent = loadable(() => import('./OtherComponent'))
const Home = loadable(() => import('./components/Home'));
const Contact = loadable(() => import('./components/Contact'));
const About = loadable(() => import('./components/About'));
const Pricing = loadable(() => import('./components/Pricing'));
const Default = loadable(() => import('./components/Default'));

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <>
            <GlobalStyles />
            <NavBar />
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/pricing' component={Pricing} />
            <Route path='*' component={Default} />
          </>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
