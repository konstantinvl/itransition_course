import { Box, Container, createTheme, ThemeProvider } from "@mui/material";

import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import { CollectionInterface } from "./common/interfaces";
import Collection from "./components/collection/collection";
import CreateNew from "./components/createNew";
import AppHeader from "./components/header/header";
import {
  ColorModeContext,
  getDesignTokens,
  THEME,
} from "./components/theme/theme";
import AppRouter from "./router/appRouter";
import { requestStartApp } from "./services/store/commonActions";
import { useAppDispatch } from "./services/store/hooks";

const coll: CollectionInterface = {
  userId: 1,
  id: 1,
  type: "vine",
  name: "test1",
  description:
    "gogjiaushglausihf dluhfglaiwuhdgluhwldguiha bdufigawbdluighdlgujwlkue audbgksb qughk wywyegf uwyqg wqyg  gqyufg qwiuygef ywgwqy gwqyge fywgq ewyfg wyeg ygyweiyfgkwqu ywqyegwuiqygf yqgwfifuyg qwiygw yub",
  textField1Name: "string",
  textField2Name: "string",
  textField3Name: "string",
  numberField1Name: "string",
  numberField2Name: "string",
  numberField3Name: "string",
};

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
          <Container>
            <Box
              sx={{
                my: 10,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              <AppRouter />
              {/* <Collection collection={coll} />
              <Collection collection={coll} />
              <Collection collection={coll} />
              <Collection collection={coll} />
              <CreateNew text="createCollection" />

              <Outlet /> */}
            </Box>
          </Container>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
