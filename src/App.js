import React from 'react';
import { connect } from 'react-redux';
import { ScrollContext } from 'react-router-scroll-4';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import {
  Button,
  CssBaseline,
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
  ContactView,
  HomeView,
  PostView
} from 'views';
import {
  Header
} from 'components';
import './App.css';

const theme = createMuiTheme(themeHelper.getTheme());

const styles = theme => ({
  wrapper: {
    width: '100%'
  }
});

const AppRoot = props => {

  const actionCallback = () => {
    return props.dispatch(blogActions.clearMessaging());
  }

  const { classes } = props;

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.wrapper}>
          <BrowserRouter>
            <ScrollContext>
              <span>
                <Header />
                <Switch>
                  <Route path="/" exact component={HomeView} />
                  <Route path="/page/:page" component={BlogView} />
                  <Route path="/post/:slug" component={PostView} />
                  <Route path="/about" component={AboutView} />
                  <Route path="/build-your-bar" component={BarView} />
                  <Route path="/contact" component={ContactView} />
                </Switch>
              </span>
            </ScrollContext>
          </BrowserRouter>
        </div>
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
