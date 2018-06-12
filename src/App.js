import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import {
  Button,
  CssBaseline,
  Paper,
  Snackbar
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

const AppRoot = props => {

  const actionCallback = () => {
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
        <Snackbar open={props.message ? true : false}
                  message={props.message}
                  autoHideDuration={6000}
                  action={<Button onClick={actionCallback} color="secondary" size="small">Dismiss</Button>}
                  onClose={actionCallback} />
      </MuiThemeProvider>
    </React.Fragment>
  );

}

const mapStateToProps = state => {

  return state.blog.messaging;

};

const App = withStyles(styles)(AppRoot);

export default connect(mapStateToProps)(App);
