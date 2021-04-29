import ProjectCard from "../components/ProjectCard";

// MaterialUI Imports
import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: theme.typography.fontFamily,
    color: theme.typography.color,
  },
  main: {
    display: "flex",
    flexDirection: "row",
  },
}));

const Landing = ({ state, dispatch }) => {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <h1 className={classes.text}>Welcome to my portfolio.</h1>
      <ProjectCard />
    </Container>
  );
};

export default Landing;
