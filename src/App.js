import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { NavBar, Contact, Home, About, Pricing, Default } from './components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
