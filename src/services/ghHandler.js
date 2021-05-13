import GitHub from "github-api";

// Select specific repositories from my github
const selectRepos = (allRepos) => {
  let repos = allRepos.map((repo, index) => {
    switch (repo.name) {
      case "team-blueberry":
        repo.imageURL =
          "https://raw.githubusercontent.com/hatchways/team-blueberry/dev/client/public/thumbnail.png";
        repo.name = "peer-code-review";
        return repo;
      case "tyler-poore-portfolio":
        repo.imageURL =
          "https://raw.githubusercontent.com/LiveBacteria/tyler-poore-portfolio/master/Portfolio-Landing.png";
        return repo;
      case "magic-researcher-game":
        repo.imageURL =
          "https://raw.githubusercontent.com/LiveBacteria/magic-researcher-game/master/MagicGame-Home.png";
        return repo;
      default:
        break;
    }
  });

  repos = repos.filter((x) => {
    return x !== undefined;
  });

  return repos;
};

// Get all relevant repositories
const getRepos = async () => {
  const gh = new GitHub();
  const me = await gh.getUser("LiveBacteria");

  let allRepos = null;

  await me.listStarredRepos((err, repos) => {
    allRepos = repos;
  });

  const hatchways = await gh.getUser("hatchways");

  let allHatchwaysRepos = await hatchways.listRepos();
  allHatchwaysRepos.data.find((repo) => {
    if (repo.name === "team-blueberry") {
      allRepos.push(repo);
    }
  });

  // Lists Hatchways repos
  /*
  hatchways.listStarredRepos((err, repos) => {
    allRepos = repos;
  });
  */

  if (allRepos !== null && typeof allRepos !== "undefined") {
    return selectRepos(allRepos);
  }
};

export { getRepos };
