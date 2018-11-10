import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import green from '@material-ui/core/colors/green'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  }
})

function SearchButton(props) {
  const {loading, classes} = props

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button variant="fab" color="secondary"  type="submit">
          <SearchIcon/>
        </Button>
        {loading && <CircularProgress size={68} className={classes.fabProgress}/>}
      </div>
    </div>
  )
}

SearchButton.propTypes = {
  loading: PropTypes.bool
}

export default withStyles(styles)(SearchButton)



