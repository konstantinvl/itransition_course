import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Toolbar, Typography } from "@mui/material";

import TranslatedText from "../translatedText";
import HeaderControlPanel from "./headerControlPanel";

export default function AppHeader() {
  return (
    <AppBar>
      <Toolbar sx={{ flexGrow: 1, justifyContent: "space-between" }}>
        <Typography>
          <TranslatedText text="gogo" />
        </Typography>
        <HeaderControlPanel />
      </Toolbar>
    </AppBar>
  );
}
