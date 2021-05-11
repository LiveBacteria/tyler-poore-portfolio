import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"',
    fontSize: 12,
    color: "white",
  },
  palette: {
    primary: {
      main: "#bc27fc",
      white: "#fff",
    },
    secondary: {
      main: "#4559fc",
    },
    button: {
      default: "#bc27fc",
      remove: "#fa8072",
    },
    background: {
      gradient: "linear-gradient(to bottom, #b2b7fc, #bc27fc)",
      solid: "#ecf0fa",
    },
    navbar: "#501CBD",
    divider: "#000000",
    profile: "#fff",
    boxShadow: "0 3px 5px 2px #888888",
  },
  surface: {
    display: "flex",
    justifyContent: "center",
    background: "grey",
    color: "white",
    opacity: "0.95",
  },
  spacing: 8,
});
