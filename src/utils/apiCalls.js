import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { request } from "./requestMethods";
import { getUserFromLocalStorage } from "./getFromLocalstorage";

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
  const userData = getUserFromLocalStorage();
  console.log("userData", userData);
  try {
    const res = await request.get("/auth/allusers", {
      withCredentials: true,
    });
    console.log("res in getUsers", res);
    if (res) {
      return res;
    }
  } catch (err) {
    throw err;
  }
};

export { login, getUsers };
