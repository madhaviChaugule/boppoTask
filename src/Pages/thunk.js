import { setUserLoader, setUserList, setFormLoader } from "./store/action";
import {
  fetchUserListAPI,
  createUserAPI,
  UpdateUserAPI,
  DeleteUserAPI,
} from "../Services/User/index";

export const getUserList = () => {
  return (dispatch) => {
    dispatch(setUserLoader(true));
    fetchUserListAPI()
      .then((response) => {
        dispatch(setUserList(response?.data?.data || []));
      })
      .then(() => {
        dispatch(setUserLoader(false));
      })
      .catch(() => {
        dispatch(setUserLoader(false));
      });
  };
};

export const addUser = (body, callback) => {
  return (dispatch) => {
    dispatch(setFormLoader(true));
    createUserAPI(body)
      .then(() => {
        setTimeout(() => {
          callback();
          dispatch(setFormLoader(false));
        }, 5000);
        dispatch(getUserList());
      })
      .catch(() => {
        dispatch(setFormLoader(false));
      });
  };
};

export const updateUser = (body, callback) => {
  return (dispatch) => {
    dispatch(setFormLoader(true));
    UpdateUserAPI(body)
      .then(() => {
        setTimeout(() => {
          callback();
          dispatch(setFormLoader(false));
        }, 5000);
        dispatch(getUserList());
      })
      .catch(() => {
        dispatch(setFormLoader(false));
      });
  };
};

export const deleteUser = (email) => {
  return (dispatch) => {
    dispatch(setUserLoader(true));
    DeleteUserAPI({ email })
      .then(() => {
        dispatch(getUserList());
      })
      .catch(() => {
        dispatch(setUserLoader(false));
      });
  };
};
