import {
  Box,
  Button,
  Collapse,
  CssBaseline,
  makeStyles,
  ThemeProvider,
  Typography,
  ButtonGroup,
} from "@material-ui/core";
import copy from "copy-to-clipboard";
import React, { useState } from "react";
import { AccountInfo } from "./AccountInfo";
import bgURL from "./bg.png";
import { ContentBox } from "./ContentBox";
import jake from "./jake.jpg";
import { Notification } from "./Notification";
import { COLORS, theme } from "./theme";
import SettingsIconOff from "@material-ui/icons/Settings";
import SettingsIconOn from "@material-ui/icons/SettingsOutlined";
import { Settings } from "./Settings";
import useLocalStorage from "react-use-localstorage";
import qs from "query-string";

const useStyles = makeStyles({
  "@global": {
    body: {
      backgroundColor: COLORS.BLACK,
      background: `url(${bgURL}) repeat`,
    },
  },
  settingsButton: {
    width: 48,
  },
});

function App() {
  const classes = useStyles();

  const [fetching, setFetching] = useState(false);
  const [account, setAccount] = useState<Account>();
  const [copiedEmail, setCopiedEmail] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  function handleMakeClick() {
    if (!fetching) {
      setFetching(true);
      fetch(
        qs.stringifyUrl({
          url: process.env.REACT_APP_BACKEND_URL + "/helloWorld",
          query: { gender: localStorage.getItem("gender") },
        })
      )
        .then((res) => {
          if (res.ok) {
            res.json().then(setAccount);
          }
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }

  function handleCopyClick() {
    if (account) {
      copy(account.email);
      setCopiedEmail(account.email);
      setTimeout(() => {
        setCopiedEmail("");
      }, 1000);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" justifyContent="center">
        <Box padding={3} maxWidth={600} width="100%">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginRight={1}
            marginBottom={3}
          >
            <Typography color="primary" variant="h5">
              BURRITO CITY
            </Typography>
            <Typography>V2</Typography>
          </Box>
          <ContentBox color="primary">
            <Box padding={3}>
              <Box marginBottom={2.5}>
                <img src={jake} width="100%" alt="jake the burrito dog" />
              </Box>

              <AccountInfo account={account} />

              <Collapse in={account && account.name !== "ERROR"}>
                <Box marginBottom={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={handleCopyClick}
                  >
                    {copiedEmail ? `COPIED!` : "COPY EMAIL"}
                  </Button>
                </Box>
              </Collapse>

              <ButtonGroup
                fullWidth
                variant={account ? "outlined" : "contained"}
                color="primary"
              >
                <Button
                  className={classes.settingsButton}
                  onClick={() => setShowSettings(!showSettings)}
                >
                  {showSettings ? <SettingsIconOn /> : <SettingsIconOff />}
                </Button>
                <Button onClick={handleMakeClick}>
                  {fetching
                    ? "MAKING..."
                    : `MAKE ${account ? "ANOTHER" : "ACCOUNT"}`}
                </Button>
              </ButtonGroup>

              <Settings show={showSettings} />
            </Box>
          </ContentBox>

          <Notification />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
