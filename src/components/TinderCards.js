import React, { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [peeps, setPeople] = useState([]);

  const getAllUsers = async () => {
    const response = await fetch("http://localhost:1003/api/user/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    let data = json.allUsers;
    return data;
  };

  useEffect(() => {
    async function fetchData() {
      let myArr = await getAllUsers();
      console.log(myArr);
      setPeople(myArr);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("Removing " + nameToDelete);
    // setLastDirection(direction)
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  function _arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  return (
    <Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", "margin-top": "10vh" }}
      >
        {peeps.map((person, index) => {
          const baseString = _arrayBufferToBase64(person.image.data.data);

          return (
            <TinderCard
              preventSwipe={["up", "down"]}
              key={index}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
              className="card"
            >
              <Paper
                elevation={4}
                sx={{ width: "100%", height: "100%", borderRadius: "20px" }}
              >
                <Box
                  sx={{
                    backgroundImage:
                      "url(" + `data:image/png;base64,${baseString}` + ")",
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      margin: "20px",
                      color: "#fff",
                    }}
                    variant="h4"
                  >
                    {person.name}
                  </Typography>
                </Box>
              </Paper>
            </TinderCard>
          );
        })}
      </Box>
    </Box>
  );
}

export default TinderCards;
