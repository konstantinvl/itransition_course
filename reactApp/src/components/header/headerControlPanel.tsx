import React from "react";
import { Box, IconButton } from "@mui/material";
import LanguageSwitcher from "./languageSwitcher";
import ThemeModeSwitcher from "./themeModeSwitcher";

import AuthBar from "./authbar";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function HeaderControlPanel() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        sx={{ mr: 1 }}
        color="inherit"
        onClick={() => {
          navigate("/search");
        }}
      >
        <SearchIcon />
      </IconButton>
      <ThemeModeSwitcher />
      <AuthBar />
      <LanguageSwitcher />
    </Box>
  );
}
