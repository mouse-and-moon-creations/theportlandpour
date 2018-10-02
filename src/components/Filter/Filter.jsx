/**
 * @file Logo component
 * @description Logo
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import find from 'lodash/find';

const propTypes = {
  getPostsBySpiritCallback: PropTypes.func,
  selectedSpirits: PropTypes.array,
  tags: PropTypes.array
};

const defaultProps = {
  getPostsBySpiritCallback: null,
  selectedSpirits: [],
  spirits: [
    { name: 'gin', slug: 'gin' },
    { name: 'rum', slug: 'rum' },
    { name: 'vermouth', slug: 'vermouth' },
    { name: 'vodka', slug: 'vodka' },
    { name: 'whiskey', slug: 'whiskey' },
  ],
  tags: []
};

const styles = theme => ({
  root: {
    padding: '24px 0',
    textAlign: 'center'
  },
  chip: {
    margin: '6px'
  }
});

const Sidebar = props => {

  const { classes, getPostsBySpiritCallback, selectedSpirits, spirits, tags } = props;
  let selectedList = ' ';

  selectedSpirits.forEach((selectedSpirit, index) => {
    selectedList += find(tags, { slug: selectedSpirit }).name;
    if(index < (selectedSpirits.length - 1)) {
      selectedList += ', ';
    }
  });

  return (
    <div className={classes.root}>
      <Typography>
        Filter by base spirit (showing:
          { selectedSpirits.length ? selectedList : ' all' }
        )
      </Typography>
      <div className={classes.chips}>
        { spirits.map(spirit => {
          return selectedSpirits.includes(spirit.slug) ?
            <Chip className={classes.chip} clickable color="primary" key={spirit.slug} label={find(tags, { slug: spirit.slug }).name} onDelete={() => getPostsBySpiritCallback(spirit.slug, true)} /> :
            <Chip className={classes.chip} clickable key={spirit.slug} label={spirit.name} onClick={() => getPostsBySpiritCallback(spirit.slug)} />
        }) }
      </div>
    </div>
  );

}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default withStyles(styles)(Sidebar);
