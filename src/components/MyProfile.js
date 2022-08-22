import { Stack, Grid, Typography, CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "./context/AppContext";

function MyProfile() {
  const [user, setUser] = useState(null);
  console.log(user);

  const context = useContext(AppContext);

  const { myProfile } = context;

  useEffect(() => {
    async function details() {
      let data = await myProfile();

      setUser(data);
    }
    details();
  }, []);

  function _arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  const baseString = user ? _arrayBufferToBase64(user[0].image.data.data) : "";

  return (
    <Grid container>
      <Grid item xl={3} lg={2} md={1}></Grid>
      <Grid item xl={6} lg={8} md={10} sm={12} xs={12}>
        {user ? (
          <Stack
            direction={"column"}
            spacing={3}
            fullwidth="true"
            textAlign={"center"}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={`data:image/png;base64,${baseString}`}
                height={"250px"}
                width={"330px"}
              />
            </Stack>
            <Typography variant="h3">{user[0].name}</Typography>
            <Typography variant="h6">{user[0].email}</Typography>
          </Stack>
        ) : (
          <CircularProgress />
        )}
      </Grid>
      <Grid item xl={3} lg={2} md={1}></Grid>
    </Grid>
  );
}

export default MyProfile;
