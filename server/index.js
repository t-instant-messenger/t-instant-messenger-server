const path = require('path')
const http = require('http')
const express = require('express')

const socketio = require('socket.io')
const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 8080
const io = socketio(server)

const botName = 'TIM'

const formatMessage = require('./utils/messages')
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users')

const createApp = () => {
  // static file-serving middleware
  // app.use(express.static(path.join(__dirname, '..', 'public')))

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  // sends index.html
  app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname, '..', 'public/index.html'))
    res.send('hello')
  })
  let userLang
  // Connecting socket. HTTP server that will take care of starting the server and handling interactions with Socket.io ( sending and recieving messages)
  io.on('connection', socket => {
    socket.on('joinRoom', ({username, room, lang}) => {
      userLang = lang
      const user = userJoin(socket.id, username, room)
      socket.join(user.room)

      // Welcome current user
      socket.emit(
        'message',
        formatMessage(botName, 'Welcome to TIM!', userLang)
      )

      // Broadcast when a user connects
      socket.broadcast
        .to(user.room)
        .emit(
          'message',
          formatMessage(
            botName,
            `${user.username} has joined the chat`,
            userLang
          )
        )

      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      })
    })

    // Listen for chatMessage
    socket.on('chatMessage', msg => {
      const user = getCurrentUser(socket.id)

      io
        .to(user.room)
        .emit('message', formatMessage(user.username, msg, userLang))
    })

    // Runs when client disconnects
    socket.on('disconnect', () => {
      const user = userLeave(socket.id)

      if (user) {
        io
          .to(user.room)
          .emit(
            'message',
            formatMessage(
              botName,
              `${user.username} has left the chat`,
              userLang
            )
          )

        // Send users and room info
        io.to(user.room).emit('roomUsers', {
          room: user.room,
          users: getRoomUsers(user.room)
        })
      }
    })
  })
  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  server.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))
  // set up our socket control center
}

async function bootApp() {
  await createApp()
  await startListening()
}
// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp()
} else {
  createApp()
}

module.exports = app
