import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import blue from "@material-ui/core/colors/blue"
import NavBar from "./components/NavBar"
import './css/App.scss'
import Home from "./components"
import UserDetails from "./components/UserDetails"
import PageNotFound from "./components/PageNotFound"

const theme = createMuiTheme({
  palette: {
    primary: {main: '#43a047'},
    secondary: blue,
  },
  typography: {
    useNextVariants: true,
  }
})

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <NavBar/>
          <div className="container">
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/w3-react-hw-github-api-users-search" component={Home}/>
              <Route path="/user/:username" component={UserDetails}/>
              <Route component={PageNotFound}/>
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App