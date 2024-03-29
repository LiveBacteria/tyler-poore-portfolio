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
    userSelect: "none",
    pointerEvents: "none",
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    color: theme.typography.color,
  },
  subText: {
    color: theme.typography.color,
  },
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
        onClick={() => handleProjectClick(repo.html_url)}
      >
        <Typography className={classes.text} variant="h4">
          {formatRepoName(repo.name)}
        </Typography>
        <Typography className={classes.subText}>{repo.description}</Typography>
        <img className={classes.image} src={repo.imageURL} />
      </Container>
    </Paper>
  );
};

export default ProjectCard;
