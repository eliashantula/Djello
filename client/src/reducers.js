import * as Actions from './actions'

const initialState = {
  boards: {},
  isFetching: false,
  error: null,
}

export function boards(state = initialState, action) {
  switch (action.type) {
    case Actions.GET__SUCCESS:
      return {
        ...state,
        boards: action.data,
        isFetching: false,
      }
    case Actions.GET__REQUEST:
    console.log("!!!!!!")
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case Actions.GET__FAILURE:
      console.log('Error:', action.error)
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state
  }
}

