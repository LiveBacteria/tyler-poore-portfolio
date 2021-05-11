import GitHub from "github-api";

const getRepos = async () => {
  const gh = new GitHub({
    username: process.env.ghUser,
    password: process.env.ghPassword,
  });

  const me = gh.getUser(process.env.ghUser);
  const repos = await me
    .listStarredRepos()
    .then(function ({ data: reposJson }) {
      console.log(`clayreimann has ${reposJson.length} repos!`);
      return reposJson;
    });
};

export default { getRepos };
