import axios from 'axios';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'; //
export const FETCH_USERS_SUCCES = 'FETCH_USERS_SUCCES'; //
export const FETCH_USERS_FAILURE = ' FETCH_USERS_FAILURE'; // ACTION TYPES

// action creators
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = () => {
  return {
    type: FETCH_USERS_SUCCES,
    payload: users,
  };
};

export const fetchUsersFailure = () => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// action creator
export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        /*response.data is the array of users */
        const users = response.data; //.map((user) => user.name);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is our error

        dispatch(fetchUsersFailure(error.message));
      });
  };
};
