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

function Signup() {
  const [showPassword, setShow] = useState(false);

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    dob: "",
    file: null,
  });

  const handleChange = (eve) => {
    setCredentials({ ...credentials, [eve.target.name]: eve.target.value });
  };

  return (
    <Grid container>
      <Grid item xl={3} lg={2} md={1}></Grid>
      <Grid item xl={6} lg={8} md={10} sm={12} xs={12}>
        <Stack
          p={1}
          spacing={4}
          direction={"column"}
          fullWidth
          textAlign={"center"}
        >
          <Typography variant="h3" sx={{ fontWeight: "700" }}>
            Sign Up
          </Typography>
          <form>
            <Stack direction={"column"} fullWidth p={2} spacing={3}>
              <TextField
                type={"text"}
                label={"Name"}
                fullWidth
                required
                name="name"
                value={credentials.name}
                onChange={handleChange}
              />
              <TextField
                type={"email"}
                label={"Email"}
                fullWidth
                required
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
              <TextField
                type={"number"}
                label={"Year of birth"}
                fullWidth
                required
                name="dob"
                value={credentials.dob}
                onChange={handleChange}
              />
              <TextField
                type={showPassword ? "text" : "password"}
                label={"Password"}
                fullWidth
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
                fullWidth
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
                name="file"
                value={credentials.file}
                onChange={handleChange}
              />
              <Button variant="contained" type="submit" fullWidth>
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
