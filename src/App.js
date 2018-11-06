import React, {Component} from 'react'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import blue from '@material-ui/core/colors/blue'
import './css/App.scss'
import Navbar from "./components/Navbar"
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const theme = createMuiTheme({
  palette: {
    primary: {main: '#43a047',},
    secondary: blue,
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navbar/>
        <div className="container">
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper>xs=12</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>xs=3</Paper>
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
