import React from "react";
import CardWrapper from "./cardWrapper";
import AddIcon from "@mui/icons-material/Add";
import { Box, Typography } from "@mui/material";
import TranslatedText from "./translatedText";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function CreateNew(props: { text: string; path: string }) {
  const { text, path } = props;

  const navigate = useNavigate();
  return (
    <CardWrapper bgColor={grey[100]} onClick={() => navigate(path)}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <AddIcon sx={{ width: 200, height: 200, justifySelf: "center" }} />
        <Typography variant="h4">
          <TranslatedText text={text} />
        </Typography>
      </Box>
    </CardWrapper>
  );
}
