import React from 'react'
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import MoreIcon from "@material-ui/icons/MoreHoriz"
import Grid from "@material-ui/core/Grid"
import {withStyles} from "@material-ui/core/styles"
import {Link} from "react-router-dom"

const styles = {
  card: {
    maxWidth: 345,
  },
  center: {
    textAlign: "center"
  },
  media: {
    height: 220,
  }
}

const UserItem = props => {
  const {classes, user} = props

  return <Grid item xs={6} md={4} lg={3}>
    <Card className={classes.card}>

      <CardActionArea component={Link} to={`/user/${user.login}`}>

          <CardMedia
            className={classes.media}
            image={user.avatar_url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className={classes.center} gutterBottom variant="h5" component="h2">
              {user.login}
            </Typography>
          </CardContent>

      </CardActionArea>

      <CardActions>


          <Button component={Link} to={`/user/${user.login}`} fullWidth={true} variant="contained" color="secondary">
            view details &nbsp; <MoreIcon/>
          </Button>

      </CardActions>
    </Card>
  </Grid>
}

export default withStyles(styles)(UserItem)