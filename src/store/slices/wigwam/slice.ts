import {
  PayloadAction,
  SerializedError,
  asyncThunkCreator,
  buildCreateSlice,
} from "@reduxjs/toolkit";
import { PostWigwamDto } from "utils/types/dto/wigwam/PostWigwamDto";
import { deleteWigwam, getAllWigwams, postWigwam } from "utils/api/wigwamApi";
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
    wigwamSelector: (state) => state,
  },
  reducers: (create) => {
    const createAThunk = create.asyncThunk.withTypes<{
      rejectValue: { error: string };
    }>();
    return {
      setCurrentWigwam: create.reducer(
        (state, action: PayloadAction<IWigwamModel>) => {
          state.currentWigwam = action.payload;
        }
      ),
      getWigwams: createAThunk<undefined, IWigwamModel[]>(
        async (_, { rejectWithValue }) => {
          try {
            return await getAllWigwams();
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
      createWigwam: createAThunk<PostWigwamDto, IWigwamModel>(
        async (dto, { rejectWithValue }) => {
          try {
            return await postWigwam(dto);
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
            state.wigwams.push(action.payload);
          },
          rejected: (state, action) => {
            state.error = action.error;
          },
          settled: (state) => {
            state.loading = false;
          },
        }
      ),
      decimateWigwam: createAThunk<number, number>(
        async (id, { rejectWithValue }) => {
          try {
            return await deleteWigwam(id);
          } catch (error) {
            rejectWithValue({ error: "Error" });
          }
        },
        {
          pending: (state) => {
            state.error = null;
            state.loading = true;
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

export const { getWigwams, setCurrentWigwam } = wigwamSlice.actions;
export const { wigwamSelector } = wigwamSlice.selectors;

export default wigwamSlice.reducer;
