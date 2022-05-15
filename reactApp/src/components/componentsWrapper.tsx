import { Box } from "@mui/material";
import React from "react";

export default function ComponentsWrapper(props: {
  children?: JSX.Element | JSX.Element[];
}) {
  const { children } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {children}
    </Box>
  );
}
