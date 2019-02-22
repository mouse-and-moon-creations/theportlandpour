/**
 * @file Header component
 * @description Global header and appbar
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withRouter from 'react-router-dom/withRouter';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';
import Close from '@material-ui/icons/Close';
import Search from '@material-ui/icons/Search';

const propTypes = {
  searchCallback: PropTypes.func
};

const defaultProps = {
  searchCallback: null
}

const styles = theme => ({
  appbar: {
    background: theme.palette.common.white,
    zIndex: theme.zIndex.drawer + 1
  },
  brand: {
    flexGrow: 1,
    padding: '12px 0'
  },
  email: {
    border: '1px solid #999',
    borderRadius: '3px',
    display: 'inline-block',
    fontFamily: theme.typography.fontFamily,
    fontSize: '16px',
    height: '36px',
    margin: '0 6px 0 0',
    padding: '0 0.4rem',
    verticalAlign: 'top',
    width: '240px'
  },
  header: {
    marginBottom: '12px',
    textAlign: 'center'
  },
  honeypot: {
    position: 'absolute',
    zIndex: -100
  },
  label: {
    whiteSpace: 'nowrap'
  },
  navbar: {
    backgroundColor: '#607D8B',
    color: theme.palette.common.white,
    minWidth: '1px',
    position: 'relative',
    width: '100%',
    '& a': {
      color: theme.palette.common.white
    }
  },
  searchBar: {
    alignItems: 'center',
    background: theme.palette.common.white,
    display: 'flex',
    flexGrow: 2,
    height: '100%',
    justifyContent: 'flex-end',
    paddingLeft: theme.spacing.unit * 3,
    zIndex: 1000,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: theme.spacing.unit * 2,
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100%'
    }
  },
  searchButton: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0
    }
  },
  searchIcon: {
    height: theme.spacing.unit * 4,
    width: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing.unit * 5,
      width: theme.spacing.unit * 5
    }
  },
  searchContainer: {
    flexGrow: 1,
    height: '100%',
    paddingLeft: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px'
    }
  },
  searchInput: {
    [theme.breakpoints.up('md')]: {
      borderColor: theme.palette.grey[500],
      borderRadius: theme.spacing.unit / 2,
      borderStyle: 'solid',
      borderWidth: '1px',
      marginRight: theme.spacing.unit,
      padding: theme.spacing.unit
    },
  },
  searchSubmit: {
    color: theme.palette.common.white,
    background: theme.palette.secondary.main,
    borderRadius: theme.spacing.unit / 2,
    marginLeft: theme.spacing.unit * 2,
    padding: theme.spacing.unit / 2
  },
  tabIndicator: {
    opacity: 0
  },
  tabs: {
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
  },
  tagline: {
    background: 'transparent',
    flexGrow: 1
  },
  textColorInherit: {
    opacity: '1 ! important',
  },
  toolbar: {
    background: theme.palette.common.white,
    flex: '1 1 auto',
    height: theme.spacing.unit * 11,
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    minWidth: '1px',
    position: 'relative',
    width: '100%'
  }
});

class Header extends Component {

  state = {
    q: '',
    search: false,
    tab: 0
  };

  handleChange = (e) => {

    this.setState({q: e.target.value});

  }

  handleKeyPress = (e) => {

    if(e.key === 'Enter') {
      this.search();
    }

  }

  search = () => {

    if(this.state.q.length) {

      this.setSearch();
      this.props.history.push('/search/' + this.state.q + '/1');
      this.setState({q: ''})

    }

  }

  setSearch = () => {

    this.setState({
      search: !this.state.search
    })

  }

  setTab = (event, value) => {

    this.setState({ tab: value });

  }

  render() {

    const { classes } = this.props;

    //const submitForm = fields => { return props.dispatch(blogActions.addToMailChimp(fields)); }
    //const form = <Form submitFormCallback={submitForm} form="hero" classes={{ submitButton: classes.submitButton, form: classes.form }} showCancel={false} buttonColor="secondary" submitLabel="Sign up" />;
    //const formSuccess = <Typography color="primary">Thank you for subscribing to our newsletter. Please check your email for confirmation.</Typography>;

    return (
      <React.Fragment>
        <AppBar className={classes.appbar} position="fixed" color="default">
          <Toolbar className={classes.toolbar}>
            <div className={classes.brand}>
              <Link to="/">
                <img src="/assets/images/brand/tpp.brand.md.png" alt=""/>
              </Link>
            </div>
            {this.state.search ?
              <div className={classes.searchBar}>
                <Input value={this.state.q} onChange={this.handleChange} onKeyPress={this.handleKeyPress} autoFocus className={classes.searchContainer} classes={{input: classes.searchInput}} disableUnderline placeholder="Search" />
                <Hidden smDown>
                  <Button onClick={this.search} color="primary" size="small" variant="contained">
                    <Search /> Search
                  </Button>
                </Hidden>
                <IconButton className={classes.searchButton}>
                  <Close className={classes.searchIcon} onClick={this.setSearch} />
                </IconButton>
              </div> :
              <IconButton className={classes.searchButton}>
                <Search className={classes.searchIcon} onClick={this.setSearch} />
              </IconButton>
            }
            <Hidden mdDown>
              <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
              <div id="mc_embed_signup" className={classes.newsletter}>
                <form action="https://inspecdigital.us10.list-manage.com/subscribe/post?u=2b5f5ea27c2aeb60c18ebca53&amp;id=d633c0fa8c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll">
                  	<input type="email" defaultValue="" name="EMAIL" className={classes.email} id="mce-EMAIL" placeholder="Get the newsletter" required />
                    <div className={classes.honeypot} aria-hidden="true">
                      <input type="text" name="b_2b5f5ea27c2aeb60c18ebca53_d633c0fa8c" tabIndex="-1" value="" />
                    </div>
                    <div className="clear" onClick={this.submit}>
                      <Button color="secondary" type="submit" variant="raised" size="small">Sign up</Button>
                    </div>
                  </div>
                </form>
              </div>
            </Hidden>
          </Toolbar>
          <div className={classes.navbar}>
            <Tabs
              classes={{indicator: classes.tabIndicator}}
              className={classes.tabs}
              onChange={this.setTab}
              scrollable={true}
              scrollButtons="off"
              indicatorColor="primary"
              value={this.state.tab}
            >
              <Link to="/"><Tab classes={{ textColorInherit: classes.textColorInherit, label: classes.label }} label="Home" /></Link>
              <Link to="/page/1"><Tab classes={{ textColorInherit: classes.textColorInherit, label: classes.label }} label="Cocktails" /></Link>
              <Link to="/feature-page/1"><Tab classes={{ textColorInherit: classes.textColorInherit, label: classes.label }} label="Features" /></Link>
              <Link to="/about"><Tab classes={{ textColorInherit: classes.textColorInherit, label: classes.label }} label="About" /></Link>
              <Link to="/contact"><Tab classes={{ textColorInherit: classes.textColorInherit, label: classes.label }} label="Contact" /></Link>
            </Tabs>
          </div>
        </AppBar>
      </React.Fragment>
    );

  }

}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

const styledComponent = withStyles(styles)(Header);

export default withRouter(styledComponent);
