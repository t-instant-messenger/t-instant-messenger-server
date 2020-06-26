import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

// import {withTranslations} from '../../../utilities/withTranslations'

const ChatPage = () => (
  <Container maxWidth="sm">
    <Typography
      component="div"
      style={{backgroundColor: '#827191', height: '100vh'}}
    >
      <div>Chat Area</div>
      <div>Message Sender</div>
    </Typography>
  </Container>
)

export default ChatPage
// export default withTranslations(ChatPage)
