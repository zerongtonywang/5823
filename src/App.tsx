import {
  Box,
  Button,
  Collapse,
  CssBaseline,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import copy from "copy-to-clipboard";
import React, { useState } from "react";
import { AccountInfo } from "./AccountInfo";
import bgURL from "./bg.png";
import { ContentBox } from "./ContentBox";
import jake from "./jake.jpg";
import { Notification } from "./Notification";
import { COLORS, theme } from "./theme";

const useStyles = makeStyles({
  root: {
    backgroundColor: COLORS.BLACK,
    background: `url(${bgURL}) repeat`,
  },
});

function App() {
  const classes = useStyles();

  const [fetching, setFetching] = useState(false);
  const [account, setAccount] = useState<Account>();
  const [copiedEmail, setCopiedEmail] = useState("");

  function handleMakeClick() {
    if (!fetching) {
      setFetching(true);
      fetch(process.env.REACT_APP_BACKEND_URL + "/helloWorld")
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
      <Box
        className={classes.root}
        minHeight="100vh"
        display="flex"
        justifyContent="center"
      >
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

              <Collapse in={!!account}>
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
                variant={account ? "outlined" : "contained"}
                fullWidth
                color="primary"
                onClick={handleMakeClick}
              >
                {fetching
                  ? "MAKING..."
                  : `MAKE ${account ? "ANOTHER" : "ACCOUNT"}`}
              </Button>
            </Box>
          </ContentBox>

          <Notification />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
