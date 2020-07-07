import {
  Box,
  makeStyles,
  ThemeProvider,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import React from "react";
import bgURL from "./bg.png";
import { theme } from "./theme";

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
        >
          <Typography color="primary" variant="h5">
            BURRITO CITY
          </Typography>
          <Typography color="secondary">V2</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
