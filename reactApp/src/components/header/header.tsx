import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import collectionImage from "../../assets/collection.png";

import TranslatedText from "../translatedText";
import HeaderControlPanel from "./headerControlPanel";
import { useNavigate } from "react-router-dom";

export default function AppHeader() {
  const navigate = useNavigate();
  return (
    <AppBar>
      <Toolbar sx={{ flexGrow: 1, justifyContent: "space-between" }}>
        <Button onClick={() => navigate("/")}>
          <img src={collectionImage} alt="mainlogo" style={{ width: "50px" }} />
        </Button>
        <HeaderControlPanel />
      </Toolbar>
    </AppBar>
  );
}
