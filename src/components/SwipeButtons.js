import { Avatar, IconButton, Paper } from '@mui/material'
import React from 'react'

function SwipeButton(props) {
    const iconColor = props.color
  return (
    <Avatar sx={{'height': 48, 'width': 48, 'backgroundColor': '#fff', 'boxShadow': '3px 3px 3px #b8b4ab'}}>
    
        <IconButton sx={{'color': {iconColor}}}>
            {props.icon}
        </IconButton> 
    </Avatar>
  )
}

export default SwipeButton