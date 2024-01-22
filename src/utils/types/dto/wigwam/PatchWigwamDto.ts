import { IUserModel } from "utils/types/model/IUserModel";
import { Song } from "utils/types/model/IWigwamModel";

export interface PatchWigwamDto {
  id: number;
  name?: string;
  maxSongForMember?: number;
  songs?: Song[];
  members?: IUserModel[];
}
