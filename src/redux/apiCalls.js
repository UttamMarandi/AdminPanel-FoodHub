import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { request } from "../utils/requestMethods";

const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await request.post("/auth/login", user);
    if (res) {
      dispatch(loginSuccess(res.data));
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};

export { login };
