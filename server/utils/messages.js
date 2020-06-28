const moment = require('moment')

function formatMessage(username, text, lang = 'en') {
  return {
    username,
    text,
    lang,
    time: moment().format('h:mm a')
  }
}

module.exports = formatMessage
