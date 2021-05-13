// React Imports
import { useReducer, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import initState from "./initState";
import reducer from "./reducers";
import Landing from "./pages/Landing";
import Bio from "./pages/Bio";
import FAB from "./components/FAB";

// Services Imports
import { getRepos } from "./services/ghHandler";

// MaterialUI Imports
import { theme } from "./themes/theme.js";
import { ThemeProvider, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
  fab: {
    margin: theme.spacing(1),
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
  const [state, dispatch] = useReducer(reducer, {}, initState);
  const classes = useStyles();

  useEffect(() => {
    // Get tweets and projects

    dispatch({ type: "getRepos" });
    getRepos().then((repos) => {
      dispatch({ type: "updateRepos", item: repos });
    });

    console.log(state);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container className={`${classes.background} ${classes.main}`}>
        <Router>
          <Switch>
            <Route exact path="/bio">
              <Bio />
            </Route>
            <Route exact path="/">
              <Landing state={state} dispatch={dispatch} />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
