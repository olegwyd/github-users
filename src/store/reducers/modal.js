let initialState = {
  modalOpened: false,
};

const modalWindowReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        modalOpened: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalOpened: false,
      };
    default:
      return state;
  }
};

export default modalWindowReducer;
