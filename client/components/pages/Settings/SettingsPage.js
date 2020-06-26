import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const SettingsPage = () => (
  <Container maxWidth="sm">
    <Typography
      component="div"
      style={{backgroundColor: '#E2E8CE', height: '100vh'}}
    >
      <div>
        <div>User Profile</div>
        <div>Theme Selector</div>
        <div>LanguageSelector</div>
        <div>Clock Mode Selector</div>
      </div>
    </Typography>
  </Container>
)

export default SettingsPage
