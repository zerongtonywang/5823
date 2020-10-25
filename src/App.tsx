import {
  Box,
  Button,
  Collapse,
  CssBaseline,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import SettingsIconOff from "@material-ui/icons/Settings";
import SettingsIconOn from "@material-ui/icons/SettingsOutlined";
import copy from "copy-to-clipboard";
import qs from "query-string";
import React, { useState } from "react";
import useLocalStorage from "react-use-localstorage";
import { AccountInfo } from "./AccountInfo";
import bgURL from "./bg.png";
import { ContentBox } from "./ContentBox";
import jake from "./jake.jpg";
import { Notification } from "./Notification";
import { Settings } from "./Settings";
import { COLORS, theme } from "./theme";
import { checkAccountError } from "./utils";

const useStyles = makeStyles({
  "@global": {
    body: {
      backgroundColor: COLORS.BLACK,
      background: `url(${bgURL}) repeat`,
    },
  },
  settingsButton: {
    marginRight: -8,
    minWidth: 36,
    "& .MuiButton-label": {
      width: 24,
    },
  },
});

function App() {
  const classes = useStyles();

  const [fetching, setFetching] = useState(false);
  const [account, setAccount] = useState<GAccount>();
  const [copiedEmail, setCopiedEmail] = useState("");
  const [hasValidRefcode, setHasValidRefcode] = useLocalStorage(
    "hasValidRefcode",
    ""
  );
  const [showSettings, setShowSettings] = useState(!hasValidRefcode);
  const [hideTip, setHideTip] = useLocalStorage("hideTip", "");

  function handleMakeClick() {
    if (!fetching) {
      setFetching(true);
      fetch(
        qs.stringifyUrl({
          url: process.env.REACT_APP_BACKEND_URL + "/helloWorld",
          query: {
            gender: localStorage.getItem("gender"),
            refcode: localStorage.getItem("refcode"),
          },
        })
      )
        .then((res) => {
          if (res.ok) {
            res.json().then((account) => {
              if (account.email && account.password) {
                setShowSettings(false);
                setTimeout(() => {
                  setHasValidRefcode("true");
                }, 500);
              }
              setAccount(account);
            });
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
      <Box padding={3} maxWidth={600} width="100%" mx="auto">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box position="relative">
            <Typography color="primary" variant="h5">
              BURRITO CITY
            </Typography>

            <Box position="absolute" top={-6} right={-25}>
              <Typography variant="caption">V2</Typography>
            </Box>
          </Box>

          <Button
            className={classes.settingsButton}
            onClick={() => setShowSettings(!showSettings)}
          >
            {showSettings ? <SettingsIconOn /> : <SettingsIconOff />}
          </Button>
        </Box>

        <Collapse in={showSettings}>
          <Box pt={3}>
            {!hasValidRefcode && (
              <Box mb={3}>
                <Notification
                  color="primary"
                  label="Due to rising traffic, this project is now invite-only. If you know me, msg me for a refcode."
                />
              </Box>
            )}
            <Settings />
          </Box>
        </Collapse>

        <Box height={24} />

        <ContentBox color="primary">
          <Box padding={3}>
            <Box marginBottom={2.5}>
              <img src={jake} width="100%" alt="jake the burrito dog" />
            </Box>

            <Collapse in={!!account}>
              {account && <AccountInfo account={account} />}
            </Collapse>

            <Collapse in={account && !checkAccountError(account)}>
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

            <Button
              fullWidth
              variant={account ? "outlined" : "contained"}
              color="primary"
              onClick={handleMakeClick}
            >
              {fetching
                ? "MAKING..."
                : `MAKE ${account ? "ANOTHER" : "ACCOUNT"}`}
            </Button>
          </Box>
        </ContentBox>

        {!hideTip && (
          <Box mt={3}>
            <Notification
              label={`Tip: You can "Add to Home Screen" for easy access.`}
              onDelete={() => setHideTip("true")}
            />
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
