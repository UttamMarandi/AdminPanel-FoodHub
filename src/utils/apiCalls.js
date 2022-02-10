import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { request } from "./requestMethods";

const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await request.post("/auth/login", user);
    console.log("response", res);
    if (res) {
      dispatch(loginSuccess(res.data));
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};

export { login };
