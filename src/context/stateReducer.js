export const initialState = {
  user: null,
  // accessToken:
  //   'BQAgKCFqJLqwRUMVd1fIIp6ZsTy8t-0poh7vEI82FH1pHD-_hKOPOC1tNs7qgrWEDCpV6aAp8H7T3nb0C-hLok5omLLUvA2XT3O5vN_7W3szUXj3BF7oxTbCjG3teUp5zbbbALczTi2a3ZhyEJ1JKYFM8TUa',
  playlists: [],
  playing: null,
  item: null,
};

export const actions = {
  SET_USER: 'SET_USER',
  SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN',
  SET_PLAYLISTS: 'SET_PLAYLISTS',
};

function stateReducer(state, action) {
  switch (action.type) {
    case actions.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actions.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
      };

    case actions.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
}

export default stateReducer;
