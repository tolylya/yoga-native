export function markAsFavorite(key) {
  return (dispatch) => {
    dispatch({
      type: 'MARK_AS_FAVORITE',
      payload: key,
    });
  };
}

export function removeFromFavorite(key) {
  return (dispatch) => {
    dispatch({
      type: 'REMOVE_FROM_FAVORITE',
      payload: key,
    });
  };
}
