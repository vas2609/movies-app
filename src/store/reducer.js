
import * as actionTypes from "./actionTypes";

let defaultState = {
  move: [],
  comments: null,
  singleMuve: [],
  error:null,
  loading: false
};



let reducer = (state = defaultState, action) =>{
    switch (action.type) {
      case actionTypes.LOADING: {
        return {
          ...state,
          loading: !defaultState.loading,
        };
      }

      case actionTypes.GET_MUVE_SUCCESS: {
        let res = action.res.movies;
        return {
          ...state,
          move: res,
          loading: false,
        };
      }
      case actionTypes.GET_SINGLE_MOVE: {
        let single = action.res.movie;
        return {
          ...state,
          loading: false,
          singleMuve: single,
        };
      }
      default:
        return state;
    }
}

export{reducer}