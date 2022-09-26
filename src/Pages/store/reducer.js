import { ACTIONS } from "./action";

const initialState = {
  user: [],
  userLoader: false,
  formLoader: false,
  employee: {},
};

const userReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    // LOADERS //

    case ACTIONS.FETCH_USER_LOADER:
      return {
        ...state,
        userLoader: payload,
      };
    case ACTIONS.FETCH_FORM_LOADER:
      return {
        ...state,
        formLoader: payload,
      };

    // Data Stores //
    case ACTIONS.FETCH_USER:
      return {
        ...state,
        user: payload,
      };
    case ACTIONS.SET_EMPLOYEE:
      return {
        ...state,
        employee: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
