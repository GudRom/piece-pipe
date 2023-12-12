import { IUserModel } from "utils/types/model/IUserModel";
import { ISongModel } from "utils/types/model/ISongModel";

export interface PatchWigwamDto {
  name?: string;
  maxSongForMember?: number;
  songs?: [
    {
      memberId: number;
      song: ISongModel;
    }
  ];
  members?: IUserModel[];
}
