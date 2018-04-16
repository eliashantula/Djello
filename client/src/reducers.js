import * as Actions from "./actions";

const initialState = {
  boards: [],
  isFetching: false,
  error: null,
  currentBoard: undefined,
  currentPage: { title: " " },
  blists: [],
  cards: [],
  currentList: undefined,
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
    case Actions.DELETE__SUCCESS:
    let index1;
    
    for (let i =0; i < state.boards.length; i++) {
      if(state.boards[i].id === action.data.id){
        index1=i
      }
    }
      return {
    ...state,
    isFetching: false,
    boards: 
    state.boards.slice(0,index1).concat([action.data]).concat(state.boards.slice(index1+1)),
    currentBoard: action.data

    }

    case Actions.GET__FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case Actions.GET__BOARD:
      console.log(state);
      return {
        ...state,

        currentBoard: action.data,
        isFetching: false,
        currentPage: action.data
      };
    case Actions.CREATE__BOARD:
      return {
        ...state,
        boards: [...state.boards, action.data],
        isFetching: false,
        currentPage: action.data
      };
    case Actions.CREATE__LIST:
      console.log(state);
      return {
        ...state,

        blists: [...state.blists, action.data],
        isFetching: false
      };
case Actions.CREATE__CARD:
      return {
        ...state,

        blists: [...state.cards, action.data],
        isFetching: false
      };
   /* case Actions.GETALL_REQUEST:
      return {
        loading: true
      };
    case Actions.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case Actions.GETALL_FAILURE:
      return {
        error: action.error
      };*/
    /*case Actions.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(
          user => (user.id === action.id ? { ...user, deleting: true } : user)
        )
      };
    case Actions.DELETE_SUCCESS:
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    /*case Actions.DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            const { deleting, ...userCopy } = user;

            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };*/
    default:
      return state;
  }
}
