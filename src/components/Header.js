import { AppBar, IconButton, Toolbar, Tooltip } from "@mui/material";
import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Stack } from "@mui/system";

function Header() {
  return (
    <Stack direction={'column'}>

      <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-between'
      }}>
      <Tooltip title="Profile" placement='bottom' arrow enterDelay={500} leaveDelay={300}>
        <IconButton
            size="large"
            edge='start'
            aria-label="logo"     
        >
            <PersonIcon />
        </IconButton>
        </Tooltip>
        <Tooltip title="Tinder-Home" placement='bottom' arrow enterDelay={500} leaveDelay={300}>
        <IconButton
            size="large"
            edge='start'
            aria-label="logo" 
            sx={{'color': 'red',
                }}    
        >
            <WhatshotIcon />
        </IconButton>
        </Tooltip>
        <Tooltip title="Messages" placement='bottom' arrow enterDelay={500} leaveDelay={300}>
        <IconButton
            size="large"
            edge='start'
            aria-label="logo"     
        >
            <QuestionAnswerIcon />
        </IconButton>
        </Tooltip>  
      </Toolbar>
      </Stack>  
  );
}

export default Header;
