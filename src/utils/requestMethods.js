import axios from "axios";

const BASE_URL = "https://foodhub-api-ut.herokuapp.com/api/v1";
// const BASE_URL = "http://localhost:5000/api/v1";

// const resUser = JSON.parse(
//   JSON.parse(localStorage.getItem("persist:root")).user
// );

// const {
//   user: {
//     currentUser: { isAdmin },
//   },
// } = resUser;
// console.log("user2", isAdmin);

const request = axios.create({
  baseURL: BASE_URL,
});

export { request };
