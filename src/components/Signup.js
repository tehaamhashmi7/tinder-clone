import {
  Stack,
  TextField,
  Grid,
  Typography,
  InputAdornment,
  Button,
  IconButton
} from "@mui/material";
import React, { useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { upload } from "@testing-library/user-event/dist/upload";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate()

  const [showPassword, setShow] = useState(false);

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    dob: ""
  });

  const [files, setFile] = useState(null)

  

  const addToDatabase = async () => {

    const formData = new FormData()
    formData.append('name', credentials.name)
    formData.append('email', credentials.email)
    formData.append('password', credentials.password)
    formData.append('dob', credentials.dob)
    formData.append('image', files)

    const response = await fetch('http://localhost:1003/api/user/add', {
        method: 'POST',
        headers: {

        },
        body: formData
    })
    const json = await response.json()
    if (json.success) {
      localStorage.setItem('token', json.token)
      navigate('/home')
    }
  }

  const handleChange = (eve) => {
    setCredentials({ ...credentials, [eve.target.name]: eve.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addToDatabase()
  }

  // const uploadFile = async (e) => {
  //   const myFile = await e.target.files
  //   console.log(myFile)
  //   setFile(e.target.files[0])
  //   console.log(files)
    
  // }

  return (
    <Grid container>
      <Grid item xl={3} lg={2} md={1}></Grid>
      <Grid item xl={6} lg={8} md={10} sm={12} xs={12}>
        <Stack
          p={1}
          spacing={4}
          direction={"column"}
          fullwidth='true'
          textAlign={"center"}
        >
          <Typography variant="h3" sx={{ fontWeight: "700" }}>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack direction={"column"} fullwidth='true' p={2} spacing={3}>
              <TextField
                type={"text"}
                label={"Name"}
                fullwidth='true'
                required
                name="name"
                value={credentials.name}
                onChange={handleChange}
              />
              <TextField
                type={"email"}
                label={"Email"}
                fullwidth='true'
                required
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
              <TextField
                type={"number"}
                label={"Year of birth"}
                fullwidth='true'
                required
                name="dob"
                value={credentials.dob}
                onChange={handleChange}
              />
              <TextField
                type={showPassword ? "text" : "password"}
                label={"Password"}
                fullwidth='true'
                required
                name="password"
                value={credentials.password}
                onChange={handleChange}
                error={credentials.password !== credentials.confirmPass}
                  helperText={credentials.password !== credentials.confirmPass?"Passwords do not match": ""}
                  InputProps={{
                    endAdornment: showPassword ? (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => {
                            setShow(false);
                          }}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </InputAdornment>
                    ) : (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => {
                            setShow(true);
                          }}
                        >
                          <VisibilityOffIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
              />
              <TextField
                type={showPassword ? "text" : "password"}
                label={"Confirm Password"}
                fullwidth='true'
                name="confirmPass"
                value={credentials.confirmPass}
                onChange={handleChange}
              />
              <TextField
                type="file"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <AddAPhotoIcon fontSize="large" />
                    </InputAdornment>
                  ),
                }}
                name="img"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <Button variant="contained" type="submit" fullwidth='true'>
                Submit
              </Button>
            </Stack>
          </form>
        </Stack>
      </Grid>
      <Grid item xl={3} lg={2} md={1}></Grid>
    </Grid>
  );
}

export default Signup;
