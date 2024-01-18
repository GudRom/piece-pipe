import {
  SerializedError,
  asyncThunkCreator,
  buildCreateSlice,
} from "@reduxjs/toolkit";
import { IWigwamModel } from "utils/types/model/IWigwamModel";

type WigwamState = {
  wigwams: IWigwamModel[];
  currentWigwam: IWigwamModel | null;
  error: SerializedError | null;
  loading: boolean;
};

const wigwamInitState: WigwamState = {
  wigwams: [],
  currentWigwam: null,
  error: null,
  loading: false,
};

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const wigwamSlice = createSliceWithThunks({
  name: "wigwam",
  initialState: wigwamInitState,
  selectors: {
    wigwams: (state) => state.wigwams,
    currentWigwam: (state) => state.currentWigwam,
    error: (state) => state.error,
    loading: (state) => state.loading,
  },
  reducers: (create) => {
    const createAThunk = create.asyncThunk.withTypes<{
      rejectValue: { error: string };
    }>();
    return {
      getWigwams: createAThunk<undefined, IWigwamModel[]>(
        async (_, { rejectWithValue }) => {
          try {
            const response = await fetch("asdf");
            if (!response.ok) {
              throw new Error("server error");
            }
            const data = await response.json();
            return data;
          } catch (error) {
            rejectWithValue({ error: "Error" });
          }
        },
        {
          pending: (state) => {
            state.error = null;
            state.loading = true;
          },
          fulfilled: (state, action) => {
            state.wigwams = action.payload;
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

export const { getWigwams } = wigwamSlice.actions;
export const { loading, error, wigwams, currentWigwam } = wigwamSlice.selectors;

export default wigwamSlice.reducer;
