import React from 'react'
import {Link} from "react-router-dom"
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import {getUserDetais} from "../api"
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import HomeIcon from '@material-ui/icons/Home'
import LinkIcon from '@material-ui/icons/Link'
import Badge from '@material-ui/core/Badge'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
  userPhoto: {
    maxWidth: "100%",
    borderRadius: theme.spacing.unit * .5
  },
  repos: {
    marginRight: theme.spacing.unit * 2
  }

})


class UserDetails extends React.Component {
  state = {
    user: [],
    loading: false
  }

  componentDidMount = async () => {
    const username = this.props.match.params.username
    this.setState({loading: true})
    try {
      const user = await getUserDetais(username)
      this.setState({user, loading: false})
    } catch (err) {
      this.setState({loading: false})
    }
  }

  render = () => {
    const {classes} = this.props
    const {id, login, name, public_repos, html_url, location, company, bio, created_at, repos_url, message} = this.state.user
    const {loading} = this.state
    return <Paper className={classes.root}>
      {loading && <CircularProgress color="secondary"/>}
      {message === "Not Found" && loading === false && <Typography>User not found</Typography>}
      {message !== "Not Found" && loading === false && <Grid container spacing={16}>
        <Grid item md={6}>
          <img className={classes.userPhoto} alt={login} src={`https://avatars0.githubusercontent.com/u/${id}`}/>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h4">{name}</Typography><br/>

          {public_repos && <Badge badgeContent={public_repos} color="primary">
            <Typography className={classes.repos}>Repositories</Typography>
          </Badge>}
          {location && <Typography>Country: {location}</Typography>}
          {company && <Typography>Company: {company}</Typography>}
          {bio && <Typography>Biography: {bio}</Typography>}
          <Typography>Created at: {created_at}</Typography>
          <Button variant="contained" size="small" color="secondary" href={html_url}
                  rel="noopener noreferrer" target="_blank">
            <LinkIcon/>&nbsp; github url
          </Button> &nbsp;
          <Button variant="contained" size="small" color="secondary" href={repos_url}
                  rel="noopener noreferrer" target="_blank">
            <LinkIcon/>&nbsp; repositories url
          </Button>
          <br/><br/>

          <Button component={Link} to="/" variant="contained" color="primary">
            <HomeIcon/>&nbsp;Go Home
          </Button>

        </Grid>
      </Grid>
      }
    </Paper>
  }
}

export default withStyles(styles)(UserDetails)