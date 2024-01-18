import {
  SerializedError,
  asyncThunkCreator,
  buildCreateSlice,
} from "@reduxjs/toolkit";
import { GetInvitesDto } from "utils/types/dto/invite/GetInviteDto";
import { getInvites } from "utils/api/inviteApi";
import { IInviteModel } from "utils/types/model/IInviteModel";

type InviteState = {
  invites: IInviteModel[];
  currentInvite: IInviteModel | null;
  error: SerializedError | null;
  loading: boolean;
};

const inviteInitState: InviteState = {
  invites: [],
  currentInvite: null,
  error: null,
  loading: false,
};

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const inviteSlice = createSliceWithThunks({
  name: "invite",
  initialState: inviteInitState,
  selectors: {
    inviteSelector: (state) => state,
  },
  reducers: (create) => {
    const createAThunk = create.asyncThunk.withTypes<{
      rejectValue: { error: string };
    }>();
    return {
      fetchInvites: createAThunk<GetInvitesDto, IInviteModel[]>(
        async (dto, { rejectWithValue }) => {
          try {
            return await getInvites(dto);
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
            state.invites = action.payload;
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

export const { fetchInvites } = inviteSlice.actions;
export const { inviteSelector } = inviteSlice.selectors;

export default inviteSlice.reducer;
