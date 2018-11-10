import React, {Fragment} from 'react'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import PaletteIcon from '@material-ui/icons/Palette'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


class ChangeTheme extends React.Component {
  state = {
    theme: "light",
    anchorEl: null,
  }

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget})
  }

  handleCloseAndChangeTheme = theme => {
    this.setState({anchorEl: null, theme})
    this.props.changeTheme(theme)
  }

  render() {
    const {anchorEl} = this.state
    const open = Boolean(anchorEl)

    return (
      <Fragment>
        <div>
          <Button
            aria-owns={open ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            onClick={this.handleMenu}
            color="inherit"
          >
            <PaletteIcon/> theme <ExpandMoreIcon/>
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={this.handleClose}
          >
            <MenuItem onClick={() => this.handleCloseAndChangeTheme("light")}>Light Theme</MenuItem>
            <MenuItem onClick={() => this.handleCloseAndChangeTheme("dark")}>Dark Theme</MenuItem>
          </Menu>
        </div>
      </Fragment>
    )
  }
}

export default ChangeTheme
