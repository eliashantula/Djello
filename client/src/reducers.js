import * as Actions from "./actions";

const initialState = {
  boards: [],
  isFetching: false,
  error: null,
  currentBoard: []
};

export function getBoards(state = initialState, action) {
  switch (action.type) {
    case Actions.GET__SUCCESS:
      return {
        ...state,
        boards: action.data,
        isFetching: false
      };
    case Actions.GET__REQUEST:
      console.log("!!!!!!");
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET__FAILURE:
      console.log("Error:", action.error);
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case Actions.GET__BOARD:
      return {
        ...state,
        currentBoard: action.data,
        isFetching: false
      };
    default:
      return state;
  }
}
