import { Box } from "@mui/material";
import React from "react";

export default function ComponentsWrapper(props: {
  children?: JSX.Element | JSX.Element[];
}) {
  const { children } = props;
  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {children}
    </Box>
  );
}
