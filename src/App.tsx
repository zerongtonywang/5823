import {
  Box,
  makeStyles,
  ThemeProvider,
  Typography,
  CssBaseline,
  Paper,
  Button,
} from "@material-ui/core";
import React from "react";
import bgURL from "./bg.png";
import { theme } from "./theme";
import jake from "./jake.jpg";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#000403",
    background: `url(${bgURL}) repeat`,
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.root} padding={3} minHeight="100vh">
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
            <Button variant="contained" fullWidth color="primary">
              MAKE ACCOUNT
            </Button>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
