import React from "react"
import { Link } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Badge from "@material-ui/core/Badge"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import MenuIcon from "@material-ui/icons/Menu"

import "./Navigator.css"
import { MenuItems } from "./MenuItems"

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}))

export function Navigator(): JSX.Element {
  const classes = useStyles()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const mobileMenuId = "navigator-mobile"

  const handleMobileMenuClose = () => { setMobileMoreAnchorEl(null) }

  const handleMobileMenuOpen = (event: any) => { setMobileMoreAnchorEl(event.currentTarget) }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            { MenuItems.map(item => {
              return (
                <Link key={item.name} className="disable-default" to={item.path}>
                  <IconButton aria-label={item.name} color="inherit">
                    <Badge color="secondary">
                      {item.icon}
                    </Badge>
                  </IconButton>
                  {item.text}
                </Link>
              )
            })}
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        { MenuItems.map(item => {
          return (
            <MenuItem key={item.name}>
              <Link className="disable-default" to={item.path}>
                <IconButton aria-label={item.name} color="inherit">
                  <Badge color="secondary">
                    {item.icon}
                  </Badge>
                </IconButton>
                {item.text}
              </Link>
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}
