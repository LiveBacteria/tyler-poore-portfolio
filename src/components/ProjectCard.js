import { Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  surface: {
    ...theme.surface,
    margin: theme.spacing(1),
    width: theme.spacing(64),
    height: theme.spacing(64),
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
        <h1 className={classes.text}>{repo.name}</h1>
        <Typography className={classes.text}>{repo.description}</Typography>
        <img
          className={classes.image}
          src={
            repo.name === "tyler-poore-portfolio"
              ? "https://raw.githubusercontent.com/LiveBacteria/tyler-poore-portfolio/master/Portfolio-Landing.png"
              : "https://raw.githubusercontent.com/LiveBacteria/magic-researcher-game/master/MagicGame-Home.png"
          }
        />
      </Container>
    </Paper>
  );
};

export default ProjectCard;
