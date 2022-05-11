import { Box, Typography } from "@mui/material";
import { wrap } from "module";
import React from "react";
import { Stack } from "react-bootstrap";
import TranslatedText from "../translatedText";

export default function SectionMain(props: {
  title: string;
  children: JSX.Element | JSX.Element[];
}) {
  const { title, children } = props;
  return (
    <Stack>
      <Typography>
        <TranslatedText text={title} />
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {children}
      </Box>
    </Stack>
  );
}
