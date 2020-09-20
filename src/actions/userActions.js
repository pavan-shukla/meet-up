import * as actionTypes from "./actionTypes";
import axios from 'axios';

function addUserSuccess(data) {
    return {type: actionTypes.ADD_USER_SUCCESS, payload: data};
}

function addUserFail(data) {
    return {type: actionTypes.ADD_USER_FAIL, payload: data};
}

export function addUsers(user) {
  return function (dispatch) {
    axios
      .post(
        "https://meetup.free.beeceptor.com/api/participantRegistration",
        user
      )
      .then((response) => {
          dispatch(addUserSuccess(user));
      })
      .catch((e) => {
         dispatch(addUserFail(e));
      });
  };
}
