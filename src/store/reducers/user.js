let initialState = {
  userName: '',
  userData: null,
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
    default:
      return state;
  }
};

export default userReducer;
