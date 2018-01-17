import * as Actions from "./actions";

const initialState = {
  boards: [],
  isFetching: false,
  error: null,
  currentBoard: undefined,
  currentPage: { title: " " },
  blists: [],
};

export function getBoards(state = initialState, action) {
  switch (action.type) {
    case Actions.GET__SUCCESS:
      return {
        ...state,
        boards: action.data,
        isFetching: false,
        currentPage: { title: " " }
      };
    case Actions.GET__REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.DELETE__BOARD:
      let index;
      let boardsNew;

      for (var i = 0; i < state.boards.length; i++) {
        if (state.boards[i].id === action.data) {
          index = i;
        }
        return {
          ...state,
          boards: [
            ...state.boards,
            state.boards.slice(0, index).concat(state.boards.slice(index + 1))
          ],
          isFetching: false,
          error: null,
          currentPage: { title: "" }
        };
      }

    case Actions.GET__FAILURE:
     
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case Actions.GET__BOARD:
     console.log(state)
      return {
        ...state,

        currentBoard: action.data,
        isFetching: false,
        currentPage: action.data,
        
      };
    case Actions.CREATE__BOARD:
      return {
        ...state,
        boards: [...state.boards, action.data],
        isFetching: false,
        currentPage: action.data
      };
    case Actions.CREATE__LIST:
    console.log(state)
      return {
        ...state,

        blists:  [...state.blists, action.data],
        isFetching: false
        
      };
    default:
      return state;
  }
}
