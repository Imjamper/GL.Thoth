import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
});

class SearchBox extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search..."
          defaultValue="kotlin"
          inputProps={{ 'aria-label': 'Search...' }}
          onChange={this.props.handleSearch}
          onKeyDown={this.props.onKeyDown}
        />
        <IconButton className={classes.iconButton} onClick={this.props.searchClick} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}

export default withStyles(styles)(SearchBox)