import http from "../http-common";

const getAll = () => {
  return http.get("/usersList");
};

const get = id => {
  return http.get(`/users/${id}`);
};

const remove = id => {
  return http.delete(`/users/${id}`);
};

const findByName = name => {
  return http.get(`/users?name=${name}`);
};

const userService = {
  getAll,
  get,
  remove,
  findByName
};

export default userService;