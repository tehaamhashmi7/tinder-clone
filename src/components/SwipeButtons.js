import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';

function SwipeButtons(props) {
    const iconColor = props.color
  return (
    <Avatar sx={{'height': 48, 'width': 48, 'backgroundColor': '#fff', 'boxShadow': '3px 3px 3px grey'}}>
        <IconButton size='small'>
            <ReplayIcon sx={{'color': {iconColor}}}/>
        </IconButton>
    </Avatar>
  )
}

export default SwipeButtons