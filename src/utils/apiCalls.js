import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { request } from "./requestMethods";

const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await request.post("/auth/login", user);
    if (res) {
      dispatch(loginSuccess(res.data.user));
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};

const getUsers = async () => {
  try {
    const res = await request.get("/auth/allusers");
    console.log("res in getUsers", res);
    if (res) {
      return res;
    }
  } catch (err) {
    throw err;
  }
};

export { login, getUsers };
