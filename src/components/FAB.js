// React Imports, React Router Imports
import { useHistory, useLocation, withRouter } from "react-router-dom";

// Material-UI Imports
import Fab from "@material-ui/core/Fab";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(1),
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const FAB = () => {
  const classes = useStyles();
  let history = useHistory();

  //   const usePathname = () => {
  // const location = useLocation();
  // return location.pathname;
  //   };

  const handlePageFlick = () => {
    if (window.location.pathname === "/") {
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
        {window.location.pathname !== "/" ? "BIO" : "HOME"}
      </Typography>
    </Fab>
  );
};

export default FAB;
