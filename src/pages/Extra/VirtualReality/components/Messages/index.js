/**
=========================================================
* Otis Kit PRO - v2.0.1
=========================================================

* Product Page: https://material-ui.com/store/items/otis-kit-pro-material-kit-react/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'

// Otis Kit PRO components
import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'
import MKAvatar from 'components/MKAvatar'

// Images
import team1 from 'assets/images/team-1.jpg'
import team2 from 'assets/images/team-2.jpg'
import team3 from 'assets/images/team-3.jpg'
import team4 from 'assets/images/team-4.jpg'

function Messages () {
  const messagesAvatarStyles = {
    border: ({ borders: { borderWidth }, palette: { white } }) =>
      `${borderWidth[2]} solid ${white.main}`,
    cursor: 'pointer',
    position: 'relative',
    ml: -1.5,

    '&:hover, &:focus': {
      zIndex: '10'
    }
  }

  return (
    <Card>
      <MKBox display="flex" alignItems="center" justifyContent="space-between" p={3}>
        <MKTypography variant="body2" color="text">
          Messages
        </MKTypography>
        <MKBox display="flex">
          <Tooltip title="2 New Messages" placement="top">
            <MKAvatar src={team1} alt="team-1" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
          <Tooltip title="1 New Messages" placement="top">
            <MKAvatar src={team2} alt="team-2" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
          <Tooltip title="13 New Messages" placement="top">
            <MKAvatar src={team3} alt="team-3" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
          <Tooltip title="7 New Messages" placement="top">
            <MKAvatar src={team4} alt="team-4" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
        </MKBox>
      </MKBox>
    </Card>
  )
}

export default Messages
