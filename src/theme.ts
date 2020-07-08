import { createMuiTheme } from "@material-ui/core";

export const COLORS = {
  BLACK: "#000403",
  YELLOW: "#ffd204",
};

const defaultTheme = createMuiTheme({ palette: { type: "dark" } });

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
    MuiChip: {
      outlined: {
        justifyContent: "flex-start",
        backgroundColor: COLORS.BLACK,
        width: "100%",
        borderRadius: defaultTheme.shape.borderRadius,
        height: "auto",
        alignItems: "stretch",
      },
      label: {
        overflow: "visible",
        whiteSpace: "normal",
        paddingTop: 8,
        paddingBottom: 8,
        display: "flex",
        alignItems: "center",
      },
      icon: {
        width: 40,
        padding: 8,
        margin: "0 !important",
        height: "auto",
        alignSelf: "stretch",
        backgroundColor: defaultTheme.palette.divider,
      },
      deleteIcon: {
        marginLeft: "auto",
        height: "auto",
        marginRight: 12
      }
    },
  },
});
