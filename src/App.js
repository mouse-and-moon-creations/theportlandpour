import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Redirect,
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
import { blogActions } from 'actions';
import { themeHelper } from 'helpers';
import {
  AboutView,
  BarView,
  BlogView,
  ContactView
} from 'views';
import {
  Alert,
  Header
} from 'components';
import './App.css';

const theme = createMuiTheme(themeHelper.getTheme());

const styles = {
  wrapper: {
    margin: '12px auto',
    maxWidth: '900px',
    width: '100%'
  }
};

const AppRoot = props => {

  const alertCallback = () => {
    return props.dispatch(blogActions.clearMessaging());
  }

  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Paper className={classes.wrapper}>
          <BrowserRouter>
            <span>
              <Header />
              <Switch>
                <Route path="/" exact render={() => (
                    <Redirect to="/page/1" />
                  )} />
                <Route path="/page/:page" component={BlogView} />
                <Route path="/about" component={AboutView} />
                <Route path="/build-your-bar" component={BarView} />
                <Route path="/contact" component={ContactView} />
              </Switch>
            </span>
          </BrowserRouter>
        </Paper>
        <Alert message={props.message} show={props.message ? true : false} type={props.error ? 'error' : 'success'} actionCallback={alertCallback} />
      </MuiThemeProvider>
    </React.Fragment>
  );

}

const mapStateToProps = state => {

  return state.blog.messaging;

};

const App = withStyles(styles)(AppRoot);

export default connect(mapStateToProps)(App);
