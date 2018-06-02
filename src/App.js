import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import { Blog } from 'views';
import './App.css';

const theme = createMuiTheme({});

class App extends Component {

  render() {

    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
              <Switch>
                <Route path="/" component={Blog} />
              </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </React.Fragment>
    );

  }

}

export default App;
