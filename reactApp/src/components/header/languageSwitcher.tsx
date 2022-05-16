import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";
import { useTranslation } from "react-i18next";
import { languagesSet } from "../../translation/i18n";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <Box>
      <FormControl>
        <InputLabel id="language-select-label">
          <LanguageIcon />
        </InputLabel>
        <Select
          sx={{ maxHeight: "2.5em" }}
          labelId="language-select-label"
          id="language-select"
          value={i18n.language}
          label={<LanguageIcon />}
          onChange={(ev) => {
            i18n.changeLanguage(ev.target.value);
            localStorage.setItem("language", ev.target.value);
          }}
        >
          {languagesSet.map((lang) => (
            <MenuItem value={lang.value} key={lang.value}>
              {lang.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
