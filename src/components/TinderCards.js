import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import TinderCard from "react-tinder-card";
import { SwipeDown } from "@mui/icons-material";

function TinderCards() {
  const [peeps, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://image.cnbcfm.com/api/v1/image/107101580-1660095651939-gettyimages-1395371348-dk023772_07aa4cd1-36c0-4f46-9752-7e238d4fb187.jpeg?v=1660097048",
    },
    {
      name: "Jeff Bezos",
      url: "https://assets.wired.com/photos/w_730/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("Removing " + nameToDelete);
    // setLastDirection(direction)
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", "margin-top": "10vh" }}
      >
        {peeps.map((person) => (
          <TinderCard
            preventSwipe={["up", "down"]}
            key={person.name}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
            className="card"
          >
            <Paper elevation={4} sx={{ width: "100%", height: "100%" }}>
              <Box
                sx={{
                  backgroundImage: "url(" + person.url + ")",
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
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
        ))}
      </Box>
    </Box>
  );
}

export default TinderCards;
