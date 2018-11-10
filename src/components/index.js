import React, {Component, Fragment} from 'react'
import SearchForm from "./SearchForm"
import SearchResults from "./SearchResults"
import {searchUsers} from "../api"
import swal from "sweetalert"


class App extends Component {
  state = {
    searchTerm: "",
    loading: false,
    users: [],
    error: null
  }

  SearchHandler = e => {
    e.preventDefault()
    const searchTerm = e.target.elements.inputSearchValue.value.trim()
    if (!searchTerm) {
      swal("Error:", "you didn't enter a user name!", "error")
      return
    }
    this.setState({searchTerm, loading: true})
    searchUsers(searchTerm)
      .then(users => {
        users.length === 0 && swal("Alert", "No results found!", "warning")
        this.setState({users, loading: false})
      })
      .catch(error => this.setState({error, loading: false}))
  }

  componentDidUpdate = () => {
    // this run when states changed: to keep search results when go back
    const users = JSON.stringify(this.state.users)
    localStorage.setItem("users", users)
  }
  componentDidMount = () => {
    const users = localStorage.getItem("users")
    this.setState({users: JSON.parse(users)})
  }

  render() {
    const {searchTerm, loading, error, users} = this.state
    return (
      <Fragment>
        <SearchForm
          loading={loading}
          searchTerm={searchTerm}
          onSearch={this.SearchHandler}
        />
        <SearchResults error={error} users={users}/>
      </Fragment>
    )
  }
}

export default App
