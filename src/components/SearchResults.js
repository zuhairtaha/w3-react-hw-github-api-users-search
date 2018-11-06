import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'
import WorkIcon from '@material-ui/icons/Work'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import Divider from '@material-ui/core/Divider'
import Paper from "@material-ui/core/Paper"

const styles = theme => ({
  root: {
    width: '100%',
    marginTop:theme.spacing.unit * 2,
    backgroundColor: theme.palette.background.paper,
  },
})

function SearchResults(props) {
  const {classes} = props
  return (
    <Paper className={classes.root}>
      <List>
        <ListItem>
          <Avatar>
            <ImageIcon/>
          </Avatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
        </ListItem>
        <li>
          <Divider inset/>
        </li>
        <ListItem>
          <Avatar>
            <WorkIcon/>
          </Avatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014"/>
        </ListItem>
        <Divider inset component="li"/>
        <ListItem>
          <Avatar>
            <BeachAccessIcon/>
          </Avatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014"/>
        </ListItem>
      </List>
    </Paper>
  )
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SearchResults)