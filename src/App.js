import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import blue from "@material-ui/core/colors/blue"
import NavBar from "./components/NavBar"
import './css/App.scss'
import Home from "./components/Home"
import UserDetails from "./components/UserDetails"
import PageNotFound from "./components/PageNotFound"
import CssBaseline from '@material-ui/core/CssBaseline'

const themes = {
  light: createMuiTheme({
    palette: {
      primary: {main: '#43a047'},
      secondary: blue,
    },
    typography: {useNextVariants: true}
  }),
  dark: createMuiTheme({
    palette: {type: "dark"},
    typography: {useNextVariants: true}
  })
}


class App extends Component {
  state = {
    theme: themes.dark,
    loading: false
  }

  changeTheme = theme => this.setState({theme: themes[theme]})

  loadingHandler = loading => this.setState({loading})

  homeComponent = props => <Home {...props} onLoading={this.loadingHandler}/>

  userDetailsComponent = props => <UserDetails {...props} onLoading={this.loadingHandler}/>

  render() {
    const {theme, loading} = this.state
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <NavBar loading={loading} changeTheme={this.changeTheme}/>
          <div className="container">
            <Switch>
              <Route path="/w3-react-hw-github-api-users-search" exact render={this.homeComponent}/>

              <Route path="/" exact render={this.homeComponent}/>
              <Route path="/user/:username" render={this.userDetailsComponent}/>

              <Route component={PageNotFound}/>
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App