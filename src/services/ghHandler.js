import GitHub from "github-api";

// Select specific repositories from my github
const selectRepos = (allRepos) => {
  let repos = allRepos.map((repo, index) => {
    if (index === 0 || index === 1) {
      return repo;
    }
  });

  repos = repos.filter((x) => {
    return x !== undefined;
  });

  return repos;
};

// Get all relevant repositores
const getRepos = async () => {
  const gh = new GitHub();
  const me = await gh.getUser("LiveBacteria");

  // Eventually implement get of Hatchways organisation repo for apprenticeship
  // const hatchways = await gh.getUser("hatchways");

  let allRepos = null;

  await me.listStarredRepos((err, repos) => {
    allRepos = repos;
  });

  console.log(allRepos);
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
