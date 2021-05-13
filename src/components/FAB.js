// React Imports, React Router Imports
import { useState, useEffect } from "react";
import { useHistory, useLocation, withRouter } from "react-router-dom";

// Material-UI Imports
import Fab from "@material-ui/core/Fab";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(1),
    position: "fixed",
    top: -5,
    right: -5,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const FAB = () => {
  const classes = useStyles();
  let history = useHistory();
  let [pathName, setPathName] = useState();
  let location = useLocation();

  useEffect(() => {
    setPathName(location.pathname);
  }, []);

  const handlePageFlick = () => {
    if (pathName === "/") {
      history.push("/bio");
    } else {
      history.push("/");
    }
  };
  return (
    <Fab
      className={classes.fab}
      color="secondary"
      aria-label="pageFlick"
      onClick={() => {
        handlePageFlick();
      }}
    >
      <Typography className={classes.text}>
        {pathName === "/bio" ? "HOME" : "BIO"}
      </Typography>
    </Fab>
  );
};

export default FAB;
