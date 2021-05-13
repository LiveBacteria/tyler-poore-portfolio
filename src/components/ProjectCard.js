// Material-UI Imports
import { Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Helper Imports
import { formatRepoName } from "../helpers/helpers";

const useStyles = makeStyles((theme) => ({
  surface: {
    ...theme.surface,
    margin: theme.spacing(1),
    width: theme.spacing(64),
    // height: theme.spacing(64),
    maxWidth: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%",
    margin: theme.spacing(1),
  },
  image: {
    maxWidth: "100%",
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    color: theme.typography.color,
  },
  // text: theme.typography,
}));

// Handle UI Events
const handleProjectClick = (URL) => {
  window.open(URL, "_blank");
};

const ProjectCard = ({ repo }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.surface}>
      <Container
        className={classes.container}
        onClick={() => handleProjectClick(repo.homepage)}
      >
        <Typography className={classes.text} variant="h4">
          {formatRepoName(repo.name)}
        </Typography>
        <Typography className={classes.text}>{repo.description}</Typography>
        <img className={classes.image} src={repo.imageURL} />
      </Container>
    </Paper>
  );
};

export default ProjectCard;
