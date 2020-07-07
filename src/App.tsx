import {
  Box,
  Button,
  CssBaseline,
  makeStyles,
  Paper,
  ThemeProvider,
  Typography,
  Collapse,
} from "@material-ui/core";
import React, { useState } from "react";
import { AccountInfo } from "./AccountInfo";
import bgURL from "./bg.png";
import jake from "./jake.jpg";
import { COLORS, theme } from "./theme";
import copy from "copy-to-clipboard";

const useStyles = makeStyles({
  root: {
    backgroundColor: COLORS.BLACK,
    background: `url(${bgURL}) repeat`,
  },
});

function App() {
  const classes = useStyles();

  const [account, setAccount] = useState<Account>();
  const [copiedEmail, setCopiedEmail] = useState("");

  function handleMakeClick() {
    fetch(process.env.REACT_APP_BACKEND_URL + "/helloWorld").then((res) => {
      if (res.ok) {
        res.json().then(setAccount);
      }
    });
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
          <Paper variant="outlined">
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
                MAKE {account ? "ANOTHER" : "ACCOUNT"}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
