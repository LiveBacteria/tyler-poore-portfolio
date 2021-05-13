const formatRepoName = (repoName) => {
  let tempName = repoName;

  let tempNameArr = tempName.split("-");
  tempNameArr = tempNameArr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  let newName = "";

  tempNameArr.forEach((word, index) => {
    if (index === tempNameArr.length) {
      newName += word;
    } else {
      newName += word + " ";
    }
  });

  return newName;
};

export { formatRepoName };
