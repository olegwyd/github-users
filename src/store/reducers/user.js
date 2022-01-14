let initialState = {
  userName: '',
  userData: null,
  savedUsers: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    case 'SET_DATA_NULL':
      return {
        ...state,
        userData: null,
      };
    case 'SET_USER_NAME':
      return {
        ...state,
        userName: action.payload,
      };
    case 'ADD_USER_TO_SAVED':
      return {
        ...state,
        savedUsers: state.savedUsers.includes(state.userName)
          ? [...state.savedUsers]
          : [...state.savedUsers, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
