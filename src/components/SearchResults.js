import React from 'react'
import swal from "sweetalert"
import Grid from '@material-ui/core/Grid'
import UserItem from "./UserItem"

function SearchResults(props) {
  const {error, users} = props
  error && swal("Error", error.message, "error")

  return (
    <div className="mt-3">
      <Grid container spacing={24}>
        {users && users.map(user => <UserItem key={user.id} user={user}/>)}
      </Grid>
    </div>


  )
}

export default SearchResults