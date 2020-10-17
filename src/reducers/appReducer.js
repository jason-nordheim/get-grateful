export const actions = {
  setUser: 'setUser'
}

export const appReducer = (state, action) => {
  switch (action.type) {
    case actions.setUser:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default appReducer;
