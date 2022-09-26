export const ACTIONS = {
  FETCH_USER: "FETCH_USER",
  SET_EMPLOYEE: "SET_EMPLOYEE",
  FETCH_USER_LOADER: "FETCH_USER_LOADER",
  FETCH_FORM_LOADER: "FETCH_FORM_LOADER",
};

export const setUserList = (data) => {
  return {
    type: ACTIONS.FETCH_USER,
    payload: data,
  };
};

export const setEmployee = (employee) => {
  return {
    type: ACTIONS.SET_EMPLOYEE,
    payload: employee,
  };
};

export const setUserLoader = (status) => {
  return {
    type: ACTIONS.FETCH_USER_LOADER,
    payload: status,
  };
};

export const setFormLoader = (status) => {
  return {
    type: ACTIONS.FETCH_FORM_LOADER,
    payload: status,
  };
};


