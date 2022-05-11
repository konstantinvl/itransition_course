import React from "react";
import { Box } from "@mui/material";
import LanguageSwitcher from "./languageSwitcher";
import ThemeModeSwitcher from "./themeModeSwitcher";
import TranslatedText from "../translatedText";
import AuthBar from "./authbar";

export default function HeaderControlPanel() {
  return (
    <Box sx={{ display: "flex" }}>
      <ThemeModeSwitcher />
      <AuthBar />
      <LanguageSwitcher />
    </Box>
  );
}
