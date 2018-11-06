import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Paper from "@material-ui/core/Paper"
import LinearProgress from "@material-ui/core/LinearProgress"
import UserItem from "./UserItem"

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    backgroundColor: theme.palette.background.paper,
  }
})

function SearchResults(props) {
  const {classes, error, loading, users} = props
  return (
    <Paper className={classes.root}>
      {loading && <LinearProgress/>}
      {error && <p className="p-3">{error}</p>}
      <List>
        {users && users.map(user => <UserItem key={user.id} user={user}/>)}
      </List>
    </Paper>
  )
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired,
  searchTerm: PropTypes.string
}

export default withStyles(styles)(SearchResults)