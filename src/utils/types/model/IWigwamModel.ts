import { ISongModel } from "utils/types/model/ISongModel";
import { IUserModel } from "utils/types/model/IUserModel";

export interface IWigwamModel {
  id: number;
  name: string;
  ownerId: number;
  maxSongForMember: number;
  songs: [
    {
      memberId: number;
      song: ISongModel;
    }
  ];
  members: IUserModel[];
}
