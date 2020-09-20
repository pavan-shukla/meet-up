import * as actionsTypes from "../actions/actionTypes";

const initialState = {
  users: [
    {
      name: "Test 1",
      age: "22",
      dob: new Date('1998'),
      profession: "student",
      locality: "India",
      numOfGuests: "2",
      address: "Test",
      acceptTnC: true,
    },
    {
      name: "Test 2",
      age: "23",
      dob: new Date('1997'),
      profession: "student",
      locality: "India",
      numOfGuests: "2",
      address: "Test",
      acceptTnC: true,
    },
    {
      name: "Test 3",
      age: "24",
      dob: new Date('1996'),
      profession: "Employed",
      locality: "India",
      numOfGuests: "1",
      address: "Test",
      acceptTnC: true,
    },
    {
      name: "Test 4",
      age: "28",
      dob: new Date('1992'),
      profession: "Employed",
      locality: "India",
      numOfGuests: "1",
      address: "Test",
      acceptTnC: true,
    }
  ],
  isAddUserSuccess: false,
  isAddUserFail: false
};

//Reducers are pure JavaScript Functions
const appReducer = (state = initialState, action) => {
  let newState = { ...state };
  if (action.type === actionsTypes.ADD_USER_SUCCESS) {
    newState.users = [...state.users, action.payload];
    newState.isAddUserSuccess = true;
    return newState;
  } else if (action.type === actionsTypes.ADD_USER_FAIL) {
    newState.isAddUserFail = true;
    return newState;
  } else {
    return state;
  }
};

export default appReducer;
