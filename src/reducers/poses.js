export const initialState = {
  favorites: [],
  selectedPose: null,
};

export default function posesReducer(state = initialState, action) {
  switch (action.type) {
    case 'MARK_AS_FAVORITE': {
      const favorites = [...state.favorites];
      favorites.push(action.payload);
      return { ...state, favorites };
    }

    case 'REMOVE_FROM_FAVORITE': {
      const favorites = [...state.favorites].filter(item => item !== action.payload);
      return { ...state, favorites };
    }

    case 'persist/REHYDRATE': {
      return initialState;
    }

    default:
      return state;
  }
}
