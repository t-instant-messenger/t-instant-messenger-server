import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import {logout} from '../../store'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Toolbar} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 12
  },

  title: {
    flexGrow: 1
  }
}))

const Navbar = ({handleClick, isLoggedIn}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img className="logo" src="./favicon.ico" alt="logo" />

          <Typography variant="h4" className={classes.title}>
            Fullstack Gallery
          </Typography>

          <nav className="nav_links">
            <Link className="chat" to="/chat">
              <Button color="inherit">Chat</Button>
            </Link>

            <Link className="setting" to="/setting">
              <Button color="inherit">Setting</Button>
            </Link>
          </nav>
          <hr />
        </Toolbar>
      </AppBar>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
