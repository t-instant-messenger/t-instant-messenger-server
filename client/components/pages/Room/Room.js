import * as React from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import MenuItem from '@material-ui/core/MenuItem'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import rooms from './rooms'

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }))

function Room() {
  // const classes = useStyles()
  const [roomVal, setRoom] = React.useState('')
  const handleChange = event => {
    setRoom(event.target.value)
    console.log(event.target)
    console.log(roomVal)
  }
  return (
    <div>
      <Container className="join-container">
        <CssBaseline />
        <header className="join-header">
          <h1>
            <i className="fas fa-smile" /> TIM APP
          </h1>
        </header>
        <main className="join-main">
          <form action="chat.html">
            <div className="form-control">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username..."
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="room">Room</label>
              <select name="room" id="room">
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="C#">C#</option>
                <option value="Ruby">Ruby</option>
                <option value="Java">Java</option>
              </select>
            </div>
            {/* <FormControl>
              <TextField
                labelid="usern"
                className="form-control"
                id="username"
                label="Username"
                type="text"
                placeholder="Username"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </FormControl>

            <FormControl variant="outlined" className="form-control">
              <Select
                labelid="room-label"
                id="room"
                label="room"
                helpertext="Please select a room"
                value={roomVal}
                onChange={handleChange}
              >
                <div>{`${roomVal}`}</div>
                {rooms.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
            <Button
              className="btn"
              type="sumbit"
              variant="contained"
              color="secondary"
            >
              Join Chat
            </Button>
          </form>
        </main>
      </Container>
    </div>
  )
}

export default Room
