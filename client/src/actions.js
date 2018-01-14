export const GET__REQUEST = 'GET__REQUEST'
export const GET__SUCCESS = 'GET__SUCCESS'
export const GET__FAILURE = 'GET__FAILURE'

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

export function getInitialBoards() {
  return (dispatch) => {
  // Update the state so that it knows the request has begun
  dispatch(getRequest())
  console.log('hi!!!!!!!!!!!!!!!!!!!!!')

  fetch('http://localhost:3001/api/boards')
    .then((response) => {
      // If response not okay, throw an error
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      // Otherwise, extract the response into json
      return response.json()
    })
    .then((json) => {
      // Dispatch success which sets the .
      dispatch(getSuccess(json))
    })
    .catch((error) => {
      // Dispatch failure which sets the error in state
      dispatch(getFailure(error))
    })
  }
}

