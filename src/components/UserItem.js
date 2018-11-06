import React from 'react'
import ListItem from "@material-ui/core/ListItem"
import Avatar from "@material-ui/core/Avatar"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"

export default function UserItem(props) {
  const {user} = props
  return <>
    <ListItem>
      <a target="_blank" rel="noopener noreferrer" href={user.html_url}>
        <Avatar alt={user.login} src={user.avatar_url}/>
      </a>
      <ListItemText>
        <b>{user.login}</b> <br/>
        <small>{user.repos_url}</small>
      </ListItemText>
    </ListItem>

    <li><Divider inset/></li>
  </>
}
