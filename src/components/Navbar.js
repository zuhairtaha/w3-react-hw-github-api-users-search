import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 15
  },
}

function Navbar(props) {
  const {classes} = props

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <div className="container">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Week3 React - Search github users
            </Typography>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navbar)