import React, {Component} from 'react'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import blue from '@material-ui/core/colors/blue'
import './css/App.scss'
import Navbar from "./components/Navbar"
import SearchForUser from "./components/SearchForUser"
import SearchResults from "./components/SearchResults"

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
          <SearchForUser/>
          <SearchResults/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
