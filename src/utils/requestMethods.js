import axios from "axios";

const BASE_URL = "https://foodhub-api-ut.herokuapp.com/api/v1";

const request = axios.create({
  baseURL: BASE_URL,
});

export { request };
