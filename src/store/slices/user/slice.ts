import {
  SerializedError,
  asyncThunkCreator,
  buildCreateSlice,
} from "@reduxjs/toolkit";
import { getCurrentUser } from "utils/api/userApi";
import { IUserModel } from "utils/types/model/IUserModel";

type UserState = {
  currentUser: IUserModel | null;
  error: SerializedError | null;
  loading: boolean;
};

const userInitState: UserState = {
  currentUser: null,
  error: null,
  loading: false,
};

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const userSlice = createSliceWithThunks({
  name: "user",
  initialState: userInitState,
  selectors: {
    userSelector: (state) => state,
  },
  reducers: (create) => {
    const createAThunk = create.asyncThunk.withTypes<{
      rejectValue: { error: string };
    }>();
    return {
      fetchUser: createAThunk<number, IUserModel>(
        async (id, { rejectWithValue }) => {
          const res = await getCurrentUser(id);

          if (!res.ok) {
            return rejectWithValue({ error: res.statusText });
          }

          return (await res.json()) as IUserModel;
        },
        {
          pending: (state) => {
            state.error = null;
            state.loading = true;
          },
          fulfilled: (state, action) => {
            state.currentUser = action.payload;
          },
          rejected: (state, action) => {
            state.error = action.error;
          },
          settled: (state) => {
            state.loading = false;
          },
        }
      ),
    };
  },
});

export const { fetchUser } = userSlice.actions;
export const { userSelector } = userSlice.selectors;

export default userSlice.reducer;
