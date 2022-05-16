import { Container, createTheme, Paper, ThemeProvider } from "@mui/material";

import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./App.scss";
import { NotificationState } from "./common/interfaces";
import { NotificationType } from "./common/renderData";
import CheckIcon from "@mui/icons-material/Check";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import AppHeader from "./components/header/header";
import {
  ColorModeContext,
  getDesignTokens,
  THEME,
} from "./components/theme/theme";
import TranslatedText from "./components/translatedText";
import AppRouter from "./router/appRouter";
import { requestStartApp } from "./services/store/commonActions";
import { useAppDispatch, useAppSelector } from "./services/store/hooks";

function App() {
  const themeMode = localStorage.getItem("mode") as THEME.LIGHT | THEME.DARK;
  const [mode, setMode] = React.useState<THEME.LIGHT | THEME.DARK>(
    themeMode || THEME.LIGHT
  );
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const mode = prevMode === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
          localStorage.setItem("mode", mode);
          return mode;
        });
      },
    }),
    []
  );

  const { notification } = useAppSelector((state) => state);

  function sendToast(message: NotificationState): React.ReactText {
    switch (message.type) {
      case NotificationType.SUCCESS:
        return toast.success(<TranslatedText text={message.message} />, {
          icon: <CheckIcon htmlColor={message.type} />,
        });
      case NotificationType.ERROR:
        return toast.error(<TranslatedText text={message.message} />, {
          icon: <ErrorOutlineIcon htmlColor={message.type} />,
        });
      default:
        return "No Notification";
    }
  }

  useEffect(() => {
    sendToast(notification);
  }, [notification]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestStartApp());
  }, []);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            p: "0px !important",
            m: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "unset !important",
          }}
        >
          <AppHeader />

          <Paper
            sx={{
              width: "100%",
              minHeight: "100vh",
              maxWidth: "unset !important",
              flex: 1,
              p: 5,
              pt: 10,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <AppRouter />
          </Paper>
        </Container>
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
