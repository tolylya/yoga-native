export const initialState = {
  favorites: {},
};

export default function posesReducer(state = initialState, action) {
  switch (action.type) {
    case 'MARK_AS_FAVORITE':
      return { ...state, favorites: { ...state.favorites, [action.payload]: true } };

    case 'REMOVE_FROM_FAVORITE':
      return { ...state, favorites: { ...state.favorites, [action.payload]: false } };

    case 'persist/REHYDRATE': {
      return initialState;
    }

    default:
      return state;
  }
}
