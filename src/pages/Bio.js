// React Imports
import FAB from "../components/FAB";

// MaterialUI Imports
import { Container, Paper, Card, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: theme.typography.fontFamily,
    color: theme.typography.color,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  surface: {
    ...theme.surface,
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    // width: theme.spacing(128),
    // height: theme.spacing(16),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Bio = ({ state, dispatch }) => {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <FAB />
      <Paper className={classes.surface}>
        <Typography variant="h1">Tyler Poore</Typography>
        <Typography variant="body1">
          I am a full stack web developer with skills in React, Node/Express,
          Firebase, Postgresql, and MongoDB to name some key techs.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Bio;
