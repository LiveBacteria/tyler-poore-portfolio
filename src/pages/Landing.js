// React Imports
import FAB from "../components/FAB";

// MaterialUI Imports
import { Container, Paper, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../components/Loading";
import ProjectCard from "../components/ProjectCard";

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
    // width: theme.spacing(16),
    // height: theme.spacing(16),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Landing = ({ state, dispatch }) => {
  console.log("repos?", state);
  const classes = useStyles();
  return state.loading ? (
    <Container className={classes.main}>
      <Loading />
    </Container>
  ) : (
    <Container className={classes.main}>
      <Paper className={classes.surface}>
        <Typography className={classes.text} variant="h2">
          Welcome to my portfolio.
        </Typography>
        <Typography variant="body">
          My name is Tyler, I am a full stack web developer.
        </Typography>
      </Paper>
      {state.projects.length > 0 && typeof state.projects[0] !== "undefined"
        ? state.projects.map((repo, index) => {
            return <ProjectCard repo={repo} key={repo.id} />;
          })
        : ""}
      <FAB />
    </Container>
  );
};

export default Landing;
