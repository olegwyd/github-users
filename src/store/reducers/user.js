const initialState = {
  userName: '',
  userData: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return {
        ...state,
        userName: action.payload,
      };
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
