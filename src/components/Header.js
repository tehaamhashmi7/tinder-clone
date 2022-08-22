import { AppBar, IconButton, Toolbar, Tooltip, Menu, MenuItem, Button } from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Stack } from "@mui/system";
import {Link, useNavigate} from 'react-router-dom'

function Header() {

  const navigate = useNavigate()

  const [anchorProfile, toggleProfile] = useState(null);
  const openProfile = Boolean(anchorProfile);

  const token = localStorage.getItem('token')

  const profileLinks = (!token ? [{name: 'Signup', path: '/signup'},
  {name: 'Login', path: '/login'}
  ] : [{name: 'Your Profile', path: '/myProfile'}, {name: 'Logout', path: '/logout'}])


  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <Stack direction={"column"}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Tooltip
          title="Profile"
          placement="bottom"
          arrow
          enterDelay={500}
          leaveDelay={300}
        >
          <IconButton
            size="large"
            edge="start"
            aria-label="logo"
            sx={{ padding: "20px" }}
            onClick={(e) => toggleProfile(e.currentTarget)}
            aria-controls={openProfile ? "profile-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openProfile ? "true" : undefined}
          >
            <PersonIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Tinder-Home"
          placement="bottom"
          arrow
          enterDelay={500}
          leaveDelay={300}
        >
          <IconButton
            size="large"
            edge="start"
            aria-label="logo"
            sx={{ color: "red", padding: "20px" }}
          >
            <Link to={'/home'}><WhatshotIcon sx={{ color: "red"}}/></Link>
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Messages"
          placement="bottom"
          arrow
          enterDelay={500}
          leaveDelay={300}
        >
          <IconButton
            size="large"
            edge="start"
            aria-label="logo"
            sx={{ padding: "20px" }}
          >
            <QuestionAnswerIcon />
          </IconButton>
        </Tooltip>

        <Menu
          open={openProfile}
          id="profile-menu"
          anchorEl={anchorProfile}
          MenuListProps={{ "aria-labelledby": "profile-button" }}
          onClose={() => toggleProfile(null)}
        >
          {profileLinks.map((data) => {
            if (data.name == "Logout") {
              return (
                <MenuItem key={"logout"} onClick={() => toggleProfile(null)}>
                  <Button variant="text" size="small" onClick={handleLogout}>
                    {data.name}
                  </Button>
                </MenuItem>
              );
            } else {
              return (
                <MenuItem key={data.name} onClick={() => toggleProfile(null)}>
                  <Link
                    key={data.path}
                    style={{ textDecoration: "none", color: "black" }}
                    to={data.path}
                  >
                    {data.name}
                  </Link>
                </MenuItem>
              );
            }
          })}
        </Menu>
      </Toolbar>
    </Stack>
  );
}

export default Header;
