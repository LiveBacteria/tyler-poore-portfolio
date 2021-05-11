// MaterialUI Imports
<<<<<<< Updated upstream
import { Container } from "@material-ui/core";
=======
import { Container, Paper, Card, Typography } from "@material-ui/core";
>>>>>>> Stashed changes
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: theme.typography.fontFamily,
    color: theme.typography.color,
  },
<<<<<<< Updated upstream
=======
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  surface: {
    ...theme.surface,
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    // width: theme.spacing(16),
    // height: theme.spacing(16),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
>>>>>>> Stashed changes
}));

const Landing = ({ state, dispatch }) => {
  const classes = useStyles();
  return (
<<<<<<< Updated upstream
    <Container>
      <h1 className={classes.text}>Welcome to my portfolio.</h1>
=======
    <Container className={classes.main}>
      <Paper className={classes.surface}>
        <h1>Welcome to my portfolio.</h1>
        <Typography color="pallete.secondary">
          My name is Tyler, I am a full stack web developer.
        </Typography>
      </Paper>
>>>>>>> Stashed changes
    </Container>
  );
};

export default Landing;
