import {
  Box,
  Stack,
  TextField,
  Grid,
  Typography,
  InputAdornment,
  Button,
  IconButton,
} from "@mui/material";
import React, { useContext, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AppContext from "./context/AppContext";

function Login() {

    const context = useContext(AppContext)

    const { loginUser } = context

    const [showPassword, setShow] = useState(false);

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
      });

    const handleChange = (eve) => {
        setCredentials({ ...credentials, [eve.target.name]: eve.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault()
        await loginUser(credentials.email, credentials.password)
        
      }

  return (
    <Box padding={2}>
      <Grid container>
        <Grid item xl={3} lg={2} md={1}></Grid>
        <Grid item xl={6} lg={8} md={10} sm={12} xs={12}>
          <Stack
            p={1}
            spacing={4}
            direction={"column"}
            fullwidth="true"
            textAlign={"center"}
          >
            <Typography variant="h3" sx={{ fontWeight: "700" }}>
              Log In
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack direction={"column"} fullwidth="true" p={2} spacing={3}>
                <TextField
                  type={"email"}
                  label={"Email"}
                  fullwidth="true"
                  required
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                />

                <TextField
                  type={showPassword ? "text" : "password"}
                  label={"Password"}
                  fullwidth="true"
                  required
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
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
                <Button variant="contained" type="submit" fullwidth='true'>
                Submit
              </Button>
              </Stack>
            </form>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
