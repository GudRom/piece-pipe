import {
  SerializedError,
  asyncThunkCreator,
  buildCreateSlice,
} from "@reduxjs/toolkit";
import { getAllSongs } from "utils/api/songApi";
import { ISongModel } from "utils/types/model/ISongModel";

type SongState = {
  songs: ISongModel[];
  currentSong: ISongModel | null;
  error: SerializedError | null;
  loading: boolean;
};

const SongInitState: SongState = {
  songs: [],
  currentSong: null,
  error: null,
  loading: false,
};

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const SongSlice = createSliceWithThunks({
  name: "song",
  initialState: SongInitState,
  selectors: {
    songSelector: (state) => state,
  },
  reducers: (create) => {
    const createAThunk = create.asyncThunk.withTypes<{
      rejectValue: { error: string };
    }>();
    return {
      fetchSongs: createAThunk<string, ISongModel[]>(
        async (dto, { rejectWithValue }) => {
          try {
            return await getAllSongs(dto);
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
            state.songs = action.payload;
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

export const { fetchSongs } = SongSlice.actions;
export const { songSelector } = SongSlice.selectors;

export default SongSlice.reducer;
