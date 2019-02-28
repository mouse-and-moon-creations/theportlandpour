/**
 * @file Navigation component
 * @description Global navigation
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import withRouter from 'react-router-dom/withRouter';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Close from '@material-ui/icons/Close';
import Search from '@material-ui/icons/Search';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
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
  }
});

class SearchBar extends Component {

  state = {
    q: '',
    search: false
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

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        {this.state.search ?
          <div className={classes.searchBar}>
            <Input value={this.state.q} type="search" onChange={this.handleChange} onKeyPress={this.handleKeyPress} autoFocus className={classes.searchContainer} classes={{input: classes.searchInput}} disableUnderline placeholder="Search" />
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
      </React.Fragment>
    );

  }

}

const styledComponent = withStyles(styles)(SearchBar);

export default withRouter(styledComponent);
