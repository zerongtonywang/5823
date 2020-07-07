import { createMuiTheme } from "@material-ui/core";

export const COLORS = {
  BLACK: "#000403",
  YELLOW: "#ffd204",
};

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: COLORS.YELLOW,
    },
    secondary: {
      main: "#94febf",
    },
    background: {
      paper: COLORS.BLACK,
    },
  },
  typography: {
    fontFamily: ["PT Mono"].join(","),
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
      },
    },
    MuiPaper: {
      outlined: {
        // backgroundColor: "transparent",
        borderColor: COLORS.YELLOW,
      },
    },
  },
});
