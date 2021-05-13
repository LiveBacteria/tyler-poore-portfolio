// React Imports
import { useReducer, useEffect } from "react";
import initState from "./initState";
import reducer from "./reducers";
import Landing from "./pages/Landing";

// Services Imports
import { getRepos } from "./services/ghHandler";

// MaterialUI Imports
import { theme } from "./themes/theme.js";
import { ThemeProvider } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/landing_bg.jpg"})`,
    minHeight: "100%",
    minWidth: "100%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  main: {
    minHeight: "100%",
    minWidth: "100%",
    display: "flex",
    alignItems: "stretch",
  },
}));

function App() {
  const [state, dispatch] = useReducer(reducer, {}, initState);
  const classes = useStyles();

  useEffect(() => {
    // Get tweets and projects
    // Possibly subscribe to socket
    // github-npm api
    // setup env variables for api key and auth
    // Make call for github user repos and repo information

    dispatch({ type: "getRepos" });
    getRepos().then((repos) => {
      dispatch({ type: "updateRepos", item: repos });
    });

    console.log(state);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container className={`${classes.background} ${classes.main}`}>
        <Landing state={state} dispatch={dispatch} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
