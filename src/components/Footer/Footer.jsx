/**
 * @file Header component
 * @description Global header and appbar
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import moment from 'moment';

const styles = theme => ({
  root: {
    paddingTop: '72px'
  },
  footer: {
    borderTopColor: theme.palette.grey[500],
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    padding: '48px',
    position: 'relative',
    textAlign: 'center',
    zIndex: theme.zIndex.drawer + 1
  },
  socialIcon: {
    marginLeft: '12px',
    verticalAlign: '0.75em ! important'
  },
  socialIconLink: {
    color: theme.palette.grey[500],
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.common.black
    }
  },
  socialIcons: {
    display: 'inline-block'
  },
});

const Footer = props => {

  const { classes } = props;

  return (
    <footer className={classes.root}>
      <div className={classes.footer}>
        <div className={classes.socialIcons}>
          <a href="https://www.instagram.com/theportlandpour/" rel="noopener noreferrer" target="_blank" className={classes.socialIconLink}>
            <FontAwesomeIcon className={classes.socialIcon} icon={faInstagram} size="lg" />
          </a>
          <a href="https://twitter.com/PortlandPour" rel="noopener noreferrer" target="_blank" className={classes.socialIconLink}>
            <FontAwesomeIcon className={classes.socialIcon} icon={faTwitter} size="lg" />
          </a>
          <a href="https://www.pinterest.com/theportlandpour/" rel="noopener noreferrer" target="_blank" className={classes.socialIconLink}>
            <FontAwesomeIcon className={classes.socialIcon} icon={faPinterest} size="lg" />
          </a>
          <a href="https://blog.theportlandpour.com/rss/" rel="noopener noreferrer" target="_blank" className={classes.socialIconLink}>
            <FontAwesomeIcon className={classes.socialIcon} icon={faRss} size="lg" />
          </a>
        </div>
        <Typography color="inherit" variant="body2">Please drink responsibly</Typography>
        <Typography color="inherit" paragraph>The Portland Pour is published by the artists and designers of Mouse and Moon Creations, an art and photography studio in Portland, Oregon</Typography>
        <Typography color="inherit" variant="caption">
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
            <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" />
          </a>
        </Typography>
        <Typography color="inherit" variant="caption">
          &copy; 2017 - {moment().format('YYYY')}. The Portland Pour, by <a href="https://www.theportlandpour.com">The Portland Pour</a>, is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.
        </Typography>
        <Typography color="inherit" variant="caption">
          All rights not granted under license are reserved.
        </Typography>
      </div>
    </footer>
  );

}

export default withStyles(styles)(Footer);
