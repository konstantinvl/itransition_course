import { Box, Container, createTheme, ThemeProvider } from "@mui/material";

import React, { useEffect } from "react";
import "./App.scss";
import AppContainer from "./components/appContainer";
import AppHeader from "./components/header/header";
import {
  ColorModeContext,
  getDesignTokens,
  THEME,
} from "./components/theme/theme";
import AppRouter from "./router/appRouter";
import { requestStartApp } from "./services/store/commonActions";
import { useAppDispatch } from "./services/store/hooks";

function App() {
  const [mode, setMode] = React.useState<THEME.LIGHT | THEME.DARK>(THEME.LIGHT);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
        );
      },
    }),
    []
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestStartApp());
  }, []);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Container>
          <AppHeader />
          <Box bgcolor={"primary"} className="check">
            <Box
              bgcolor={"primary"}
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
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
