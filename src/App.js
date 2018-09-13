import React from 'react';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { ScrollContext } from 'react-router-scroll-4';
import {
  Route,
  Switch
} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Snackbar from '@material-ui/core/Snackbar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';
import blogActions from './actions/blogActions';
import themeHelper from './helpers/themeHelper';
import AboutView from './views/AboutView';
import BlogView from './views/BlogView';
import HomeView from './views/HomeView';
import NoView from './views/NoView';
import PostView from './views/PostView';
//import SitemapView from './views/SitemapView';
import Footer from './components/Footer';
import Header from './components/Header';
import WithTracker from './components/WithTracker';
import './App.css';

const theme = createMuiTheme(themeHelper.getTheme());

const styles = theme => ({
  wrapper: {
    width: '100%'
  }
});

const ga = {
  trackingId: 'UA-98891622-2',
  gaOptions: {
    cookieDomain: 'auto'
  }
}

const AppRoot = props => {

  const actionCallback = () => {
    return props.dispatch(blogActions.clearMessaging());
  }

  const { classes } = props;

  ReactGA.initialize(ga);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.wrapper}>
        <ScrollContext>
          <span>
            <Header />
            <Switch>
              <Route path="/" exact component={WithTracker(HomeView)} />
              <Route path="/page/:page" component={WithTracker(BlogView)} />
              <Route path="/post/:slug" component={WithTracker(PostView)} />
              <Route path="/about" component={WithTracker(AboutView)} />
              <Route path="/sitemap" component={NoView} />
              <Route component={WithTracker(NoView)} />
            </Switch>
            <Footer />
          </span>
        </ScrollContext>
      </div>
      <Snackbar open={props.message ? true : false}
                message={props.message}
                autoHideDuration={6000}
                action={<Button onClick={actionCallback} color="secondary" size="small">Dismiss</Button>}
                onClose={actionCallback} />
    </MuiThemeProvider>
  );

}

const mapStateToProps = state => {

  return state.blog.messaging;

};

const App = withStyles(styles)(AppRoot);

export default connect(mapStateToProps)(App);
