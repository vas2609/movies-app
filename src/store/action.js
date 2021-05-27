import requst from "../support/reques";
import * as actionTypes from "./actionTypes";

let apiUrl = "https://yts.mx/api/v2/list_movies.json";

let singleUrl = "https://yts.mx/api/v2/movie_details.json?movie_id";

function getMove() {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING });
    requst(apiUrl)
      .then((res) => {
        dispatch({ type: actionTypes.GET_MUVE_SUCCESS, res: res.data });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.ERROR,
          error: err.message,
        });
      });
  };
}

export { getMove };

function getSingleMove(moveId) {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING });
    requst(`${singleUrl}=${moveId}`)
      .then((res) => {
        dispatch({
          type: actionTypes.GET_SINGLE_MOVE, res: res.data});
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.ERROR,
          error: err.message,
        });
      });
  };
}

export { getSingleMove };



