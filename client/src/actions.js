export const GET__REQUEST = "GET__REQUEST";
export const GET__SUCCESS = "GET__SUCCESS";
export const GET__FAILURE = "GET__FAILURE";
export const GET__BOARD = "GET__BOARD";
export const CREATE__BOARD = "CREATE__BOARD";
export const DELETE__BOARD = "DELETE__BOARD";
export const CREATE__LIST = "CREATE__LIST";

export function getRequest() {
  return {
    type: GET__REQUEST
  };
}

export function deleteBoard(id) {
  return {
    type: DELETE__BOARD,
    id
  };
}
export function createBoard(data) {
  return {
    type: CREATE__BOARD,
    data
  };
}
export function getSuccess(data) {
  return {
    type: GET__SUCCESS,
    data
  };
}

export function createList(data) {
  return {
    type: CREATE__LIST,
    data
  };
}

export function getFailure(error) {
  return {
    type: GET__FAILURE,
    error
  };
}

export function getBoard(data) {
  return {
    type: GET__BOARD,
    data
  };
}

export function getOneBoard(id) {
  return dispatch => {
    dispatch(getRequest());

    fetch(`/board/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getBoard(json));
      })
      .catch(error => {
        dispatch(getFailure(error));
      });
  };
}

export function onSubmit(e) {
  e.preventDefault();
  const id = e.target.value;
  console.log(id);
  return dispatch => {
    dispatch(getRequest());

    fetch(`/board/delete/${id}`, {
      method: "DELETE",
      body: JSON.stringify(id)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        //dispatch(deleteBoard(id))
        dispatch(getSuccess(json));
        //do not pull all data on delete,
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(getFailure(error));
      });
  };
}

export function onSubmits(e) {
  e.preventDefault();
  const id = e.target.value;

  return dispatch => {
    dispatch(getRequest());

    fetch(`/list/delete/${id}`, {
      method: "DELETE",
      body: JSON.stringify(id)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        //dispatch(deleteBoard(id))
        dispatch(getSuccess(json));
      
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(getFailure(error));
      });
  };
}

/*export function deleteBoard(id) {
  return (dispatch) => {
  
  
  fetch(`delete/${id}`, {
      method: "DELETE",
      body: JSON.stringify(id),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    .then((response) => {
      // If response not okay, throw an error
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      
      
     
    })
    .then((response) => {
      response
     
    }).
    .catch((error) => {
      // Dispatch failure which sets the error in state
      dispatch(getFailure(error))
    })
  }
}*/

export function getInitialBoards() {
  return dispatch => {
    // Update the state so that it knows the request has begun
    dispatch(getRequest());

    fetch("/api/boards")
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getSuccess(json));
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(getFailure(error));
      });
  };
}

export function createABoard(data) {
  var myHeaders = new Headers();

  myHeaders.append("content-type", "application/json");
  return dispatch => {
    console.log(data);
    dispatch(getRequest());
    console.log(data);
    fetch("/newboard", {
      method: "POST",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        console.log(json.id);
        //dispatch(createBoard(json));
        dispatch(getOneBoard(json.id));
      })
      .catch(error => {
        dispatch(getFailure(error));
      });
  };
}

export function createAList(data) {
  var myHeaders = new Headers();

  myHeaders.append("content-type", "application/json");
  return dispatch => {
    dispatch(getRequest());

    fetch("/newlist", {
      method: "POST",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        console.log(json);
        //dispatch(createList(json));
        dispatch(getOneBoard(json.boardId));
      })
      .catch(error => {
        dispatch(getFailure(error));
      });
  };
}
