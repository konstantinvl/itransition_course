import { Box, Container } from "@mui/material";
import React from "react";
import AppRouter from "../router/appRouter";
import AppHeader from "./header/header";

export default function AppContainer() {
  return (
    <Container>
      <AppHeader />
      <Box className="check">
        <Box
          sx={{
            my: 10,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <AppRouter />
        </Box>
      </Box>
    </Container>
  );
}
