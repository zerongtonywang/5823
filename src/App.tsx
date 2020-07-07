import {
  Box,
  Button,
  CssBaseline,
  makeStyles,
  Paper,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React from "react";
import bgURL from "./bg.png";
import jake from "./jake.jpg";
import { theme, COLORS } from "./theme";

const BASE_URL = "https://us-central1-burrito-city.cloudfunctions.net";

const useStyles = makeStyles({
  root: {
    backgroundColor: COLORS.BLACK,
    background: `url(${bgURL}) repeat`,
  },
});

function App() {
  const classes = useStyles();

  function handleClick() {
    fetch(BASE_URL + "/make").then(console.log);
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
              <Box marginBottom={3}>
                <img src={jake} width="100%" alt="jake the burrito dog" />
              </Box>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={handleClick}
              >
                MAKE ACCOUNT
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
