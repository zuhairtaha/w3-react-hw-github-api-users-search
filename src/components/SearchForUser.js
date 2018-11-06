import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 3,
  },
})

function SearchForUser(props) {
  const {classes} = props
  return (
    <Paper className={classes.root}>
      <Grid container alignItems="flex-end" spacing={16}>
        <Grid item>
          <PermIdentityIcon/>
        </Grid>
        <Grid item xs={12} sm container alignItems="flex-end" spacing={16}>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <TextField fullWidth={true} id="input-with-icon-grid" label="Search for user..."/>
            </Grid>


          </Grid>
          <Grid>

            <Button variant="fab" color="secondary" aria-label="Add" className={classes.button}>
              <SearchIcon/>
            </Button>

          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

SearchForUser.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SearchForUser)