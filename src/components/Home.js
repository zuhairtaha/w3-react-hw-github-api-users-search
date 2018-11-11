import React, {Component, Fragment} from 'react'
import SearchForm from "./SearchForm"
import SearchResults from "./SearchResults"
import {searchUsers} from "../api"
import swal from "sweetalert"
import PropTypes from 'prop-types'

class Home extends Component {
  state = {
    searchTerm: "",
    loading: false,
    users: [],
    error: null
  }

  SearchHandler = e => {
    const {onLoading} = this.props
    onLoading(true)

    e.preventDefault()
    const searchTerm = e.target.elements.inputSearchValue.value.trim()
    if (!searchTerm) {
      onLoading(false)
      swal("Error:", "you didn't enter a user name!", "error")
      return
    }
    this.setState({searchTerm, loading: true})
    searchUsers(searchTerm)
      .then(users => {
        users.length === 0 && swal("Alert", "No results found!", "warning")
        this.setState({users, loading: false})
        onLoading(false)
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

Home.propTypes = {
  onLoading: PropTypes.func.isRequired
}

export default Home
