import axios from "axios";

const BASE_URL = "https://foodhub-api-ut.herokuapp.com/api/v1";

const resUser = JSON.parse(
  JSON.parse(localStorage.getItem("persist:root")).user
);

const { currentUser } = resUser;
const { user } = currentUser;

console.log("user", user);

const request = axios.create({
  baseURL: BASE_URL,
});

export { request };
