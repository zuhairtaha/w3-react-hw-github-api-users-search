import React, {Component} from 'react'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import './css/App.scss'
import NavBar from "./components/NavBar"
import SearchForm from "./components/SearchForm"
import SearchResults from "./components/SearchResults"
import {getUsers, searchUsers} from "./api"

// searchUsers("a")
//   .then(console.log)
//   .catch(console.log)


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
  state = {
    searchTerm: "",
    loading: false,
    users: [],
    error: null
  }

  componentDidMount() {
    this.setState({loading: true})
    getUsers()
      .then(users => this.setState({users, loading: false}))
      .catch(error => this.setState({error, loading: false}))
  }

  SearchHandler = e => {
    e.preventDefault()
    const searchTerm = this.state.searchTerm
    this.setState({searchTerm: "", loading: true})
    searchUsers(searchTerm)
      .then(users => this.setState({users, loading: false}))
      .catch(error => this.setState({error, loading: false}))
  }

  onChangeHandler = e => this.setState({searchTerm: e.target.value})

  render() {
    const {searchTerm, loading, error, users} = this.state
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar/>
        <div className="container">
          <SearchForm
            loading={loading}
            searchTerm={searchTerm}
            onSearch={this.SearchHandler}
            onChange={this.onChangeHandler}/>
          <SearchResults loading={loading} error={error} users={users}/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
