import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import {
  CssBaseline,
  Paper
} from '@material-ui/core';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from '@material-ui/core/styles';
import { Blog } from 'views';
import { Header } from 'components';
import './App.css';

const theme = createMuiTheme({
  typography: {
    fontSize: 16
  }
});

const styles = {
  wrapper: {
    background: 'transparent',
    margin: 'auto',
    maxWidth: '900px',
    padding: '12px',
    width: '100%'
  }
};

class App extends Component {

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Paper className={classes.wrapper} elevation={0}>
            <Header />
            <BrowserRouter>
                <Switch>
                  <Route path="/" component={Blog} />
                </Switch>
            </BrowserRouter>
          </Paper>
        </MuiThemeProvider>
      </React.Fragment>
    );

  }

}

export default withStyles(styles)(App);
