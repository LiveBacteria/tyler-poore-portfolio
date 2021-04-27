import { useReducer, useEffect } from "react";
import initState from "./initState";
import reducer from "./reducers";
import Landing from "./pages/Landing";

// MaterialUI Imports
import { theme } from "./themes/theme.js";
import { MuiThemeProvider } from "@material-ui/core";

function App() {
  const [state, dispatch] = useReducer(reducer, {}, initState);
  return (
    <MuiThemeProvider theme={theme}>
      <Landing state dispatch />
    </MuiThemeProvider>
  );
}

export default App;
