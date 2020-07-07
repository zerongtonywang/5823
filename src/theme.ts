import { createMuiTheme } from "@material-ui/core";

const COLORS = {
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
        backgroundColor: "transparent",
        borderColor: COLORS.YELLOW,
      },
    },
  },
});
