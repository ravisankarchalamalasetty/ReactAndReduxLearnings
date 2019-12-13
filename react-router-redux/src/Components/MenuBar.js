import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom'

const styles = {
  menuItem: {
    marginRight: 15,
    color: '#fff',
    textDecoration: 'none'
  },
};

class MenuBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Link className={classes.menuItem} exact  to="/">Home</Link>
            <Link className={classes.menuItem} to="/add-student">Add Student</Link>
            <Link className={classes.menuItem} to="/view-students">View Students</Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);
