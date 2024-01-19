import { IUserModel } from "utils/types/model/IUserModel";
import { ISongModel } from "utils/types/model/ISongModel";

export interface PostWigwamDto {
  name: string;
  ownerId: number;
  maxSongForMember: number;
  songs: ISongModel[];
  members: IUserModel[];
}
