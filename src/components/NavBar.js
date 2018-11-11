import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import {Link} from "react-router-dom"
import ChangeTheme from "./ChangeTheme"

import LinearProgress from "@material-ui/core/LinearProgress"


const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 15,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
}

function Navbar(props) {
  const {classes, loading} = props
  // const {loading} = props
  return (
    <Fragment>
      {loading && <LinearProgress color="secondary" variant="query"/>}
      <div className={classes.root}>
        <AppBar position="static">
          <div className="container">
            <Toolbar>
              <IconButton component={Link} to="/" className={classes.menuButton} color="inherit" aria-label="Menu">
                <HomeIcon/>
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Github Users
              </Typography>
              <Button target="_blank"
                      href="https://github.com/HackYourFuture-CPH/React/blob/master/documentation/homework/W4-homework.md"
                      color="inherit">question</Button>
              <Button target="_blank" href="https://github.com/zuhairtaha/w3-react-hw-github-api-users-search"
                      color="inherit">repo</Button>

              <ChangeTheme changeTheme={props.changeTheme}/>
            </Toolbar>
          </div>
        </AppBar>
      </div>
    </Fragment>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navbar)