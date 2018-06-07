import React from 'react';
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
import { themeHelper } from 'helpers';
import { BlogView } from 'views';
import { Header } from 'components';
import './App.css';

const theme = createMuiTheme(themeHelper.getTheme());

const styles = {
  wrapper: {
    margin: '12px auto',
    maxWidth: '900px',
    width: '100%'
  }
};

const App = props => {

    const { classes } = props;

    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Paper className={classes.wrapper}>
            <Header />
            <BrowserRouter>
                <Switch>
                  <Route path="/" exact component={BlogView} />
                  <Route path="/page/:page" component={BlogView} />
                </Switch>
            </BrowserRouter>
          </Paper>
        </MuiThemeProvider>
      </React.Fragment>
    );

  }

export default withStyles(styles)(App);
