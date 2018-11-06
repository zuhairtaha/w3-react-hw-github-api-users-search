import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 15
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

function Navbar(props) {
  const {classes} = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <div className="container">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Week3 React - Search github users
            </Typography>
            <Button href="https://github.com/HackYourFuture-CPH/React/blob/master/documentation/homework/W4-homework.md"
                    color="inherit">github question</Button>
            <Button href="https://github.com/zuhairtaha/w3-react-hw-github-api-users-search"
                    color="inherit">repo</Button>
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