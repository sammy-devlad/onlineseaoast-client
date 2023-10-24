import { IAuthSlicer, ISigningResponse, IUser } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const sessionUser = JSON.parse(sessionStorage.getItem("user") || "{}") as IUser;
const checkuser = sessionStorage.getItem("user") ? sessionUser : undefined;
const sessionToken = sessionStorage.getItem("authToken") as string;
const checkauthToken = sessionStorage.getItem("authToken")
  ? sessionToken.toString()
  : undefined;

const initialState: IAuthSlicer = {
  user: checkuser,
  token: checkauthToken,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logUser: (state, { payload }: PayloadAction<ISigningResponse>) => {
      state.token = payload.token;
      state.user = payload.user;
      sessionStorage.setItem("user", JSON.stringify(payload.user));
      sessionStorage.setItem("authToken", payload.token);
    },
    resetUser: (state) => {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("authToken");

      state.user = undefined;
      state.token = "";
    },
    updateUser: (state, { payload }: PayloadAction<IUser>) => {
      sessionStorage.removeItem("user");
      state.user = payload;
      sessionStorage.setItem("user", JSON.stringify(payload));
    },
  },
});

export const { logUser, resetUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
