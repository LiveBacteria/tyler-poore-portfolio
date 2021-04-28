// MaterialUI Imports
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: theme.typography.fontFamily,
    color: theme.typography.color,
  },
}));

const Landing = ({ state, dispatch }) => {
  const classes = useStyles();
  return (
    <Container>
      <h1 className={classes.text}>Welcome to my portfolio.</h1>
    </Container>
  );
};

export default Landing;
