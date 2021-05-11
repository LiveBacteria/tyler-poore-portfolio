const useReducers = (state, action) => {
  switch (action.type) {
    case "getRepos": {
      return { ...state, loading: true };
    }
    case "updateRepos": {
      return { ...state, projects: action.item, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default useReducers;
