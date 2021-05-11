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
    <Loading />
  ) : (
    <Container className={classes.main}>
      <Paper className={classes.surface}>
        <h1>Welcome to my portfolio.</h1>
        <Typography color="pallete.secondary">
          My name is Tyler, I am a full stack web developer.
        </Typography>
      </Paper>
      {state.projects.length > 0 && typeof state.projects[0] !== "undefined"
        ? state.projects.map((repo, index) => {
            return <ProjectCard repo={repo} />;
          })
        : ""}
    </Container>
  );
};

export default Landing;
