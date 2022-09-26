import axios from "axios";

export const fetchUserListAPI = () =>
  axios.get("http://3.108.81.97:4000/fetchusers/");

export const createUserAPI = (body) => {
  return axios.post("http://3.108.81.97:4000/adduser/", body);
};

export const UpdateUserAPI = (body) => {
  return axios.post(`http://3.108.81.97:4000/update`, body);
};

export const DeleteUserAPI = (email) => {
  return axios.post(`http://3.108.81.97:4000/remove`, email);
};
