import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { NavBar, Contact, Home, About, Pricing } from './components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyles />
            <NavBar />
            <div>
              <Route exact path ='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/pricing' component={Pricing} />
            </div>
          </React.Fragment>
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
