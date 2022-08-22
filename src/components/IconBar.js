import { BottomNavigation, IconButton, Stack } from "@mui/material";
import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SwipeButton from "./SwipeButtons";

function IconBar() {
  const icons = [
    <ReplayIcon fontSize="small" sx={{ color: "#cccc00" }} />,
    <CloseIcon fontSize="small" sx={{ color: "#ff0000" }} />,
    <StarRateIcon fontSize="small" sx={{ color: "#0000ff" }} />,
    <FavoriteIcon fontSize="small" sx={{ color: "#39e600" }} />,
    <FlashOnIcon fontSize="small" sx={{ color: "#ff00ff" }} />,
  ];

  return (
    <Stack direction={"row"} sx={{ display: "flex", justifyContent: "center" }}>
      <BottomNavigation
        sx={{
          position: "absolute",
          bottom: 0,
          "marginLeft": "30px",
          "marginRight": "30px",
          width: "80%",
          height: "15%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {icons.map((icono, index) => (
          <SwipeButton key={index} icon={icono} />
        ))}
      </BottomNavigation>
    </Stack>
  );
}

export default IconBar;
