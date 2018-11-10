import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import SearchButton from "./SearchButton"

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 6,
    paddingBottom: theme.spacing.unit * 3,
  },
  userIconGrid: {
    textAlign: "right"
  },
  '@media (max-width: 767px)': {
    root: {
      paddingRight: theme.spacing.unit * 3,
    }
  }
})

function SearchForm(props) {
  const {classes, onSearch, loading} = props
  return (
    <form onSubmit={onSearch}>
      <Paper className={classes.root}>
        <Grid container alignItems="flex-end" spacing={16}>

          <Grid className={classes.userIconGrid} item xs={1}>
            <PermIdentityIcon/>
          </Grid>

          <Grid item xs={11} sm container alignItems="flex-end" spacing={16}>

            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <TextField name="inputSearchValue" fullWidth={true} id="input-with-icon-grid"
                           label="Search for user..."/>
              </Grid>
            </Grid>

            <Grid>
              {/*<Button variant="fab" color="secondary" aria-label="Add" className={classes.button}>*/}
              {/*<SearchIcon/>*/}
              {/*</Button>*/}
              <SearchButton loading={loading}/>
            </Grid>

          </Grid>

        </Grid>
      </Paper>
    </form>
  )
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSearch: PropTypes.func,
}

export default withStyles(styles)(SearchForm)