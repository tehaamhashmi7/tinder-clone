import { Box, Typography, Stack, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <Box
      sx={{
        height: "91.5vh",
        width: "100%",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1606228281437-dc226988dc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h3" sx={{ color: "#fff", fontWeight: "600" }}>
          Start Something New
        </Typography>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "white",
              border: "4px solid white",
              borderRadius: "30px",
              padding: "15px 40px",
            }}
          >
            <Link
              to={"/login"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Login
            </Link>
          </Button>
          <Button
            variant="text"
            sx={{
              color: "white",
              border: "4px solid white",
              borderRadius: "30px",
              padding: "15px 40px",
            }}
          >
            <Link
              to={"/signup"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Signup
            </Link>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default LandingPage;
