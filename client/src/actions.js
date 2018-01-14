export const GET__REQUEST = 'GET__REQUEST'
export const GET__SUCCESS = 'GET__SUCCESS'
export const GET__FAILURE = 'GET__FAILURE'
export const GET__BOARD = 'GET__BOARD'


export function getRequest() {
  return {
    type: GET__REQUEST
  }
}

export function getSuccess(data) {
  return {
    type: GET__SUCCESS,
    data,
  }
}

export function getFailure(error) {
  return {
    type: GET__FAILURE,
    error,
  }
}

export function getBoard(data){
  return {
    type: GET__BOARD,
    data,
  }
}

export function getOneBoard(id) {
  return (dispatch) => {
  // Update the state so that it knows the request has begun
  dispatch(getRequest())
  
  fetch(`${id}`)
    .then((response) => {
      // If response not okay, throw an error
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      
      
      return response.json()
    })
    .then((json) => {
      // Dispatch success which sets the .
      dispatch(getBoard(json))
    })
    .catch((error) => {
      // Dispatch failure which sets the error in state
      dispatch(getFailure(error))
    })
  }
}



export function getInitialBoards() {
  return (dispatch) => {
  // Update the state so that it knows the request has begun
  dispatch(getRequest())
  
  fetch('api/boards')
    .then((response) => {
      // If response not okay, throw an error
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      
      
      return response.json()
    })
    .then((json) => {
    
      dispatch(getSuccess(json))
    })
    .catch((error) => {
      // Dispatch failure which sets the error in state
      dispatch(getFailure(error))
    })
  }
}

