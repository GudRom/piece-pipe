import { ISongModel } from "utils/types/model/ISongModel";
import { IUserModel } from "utils/types/model/IUserModel";

export interface IWigwamModel {
  id: number;
  name: string;
  ownerId: number;
  maxSongForMember: number;
  songs: Song[];
  members: IUserModel[];
}

export type Song = {
  memberId: number;
  song: ISongModel;
};
