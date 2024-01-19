import { IUserModel } from "utils/types/model/IUserModel";

export interface IInviteModel {
  id: number;
  wigwamId: number;
  name: string;
  from: IUserModel;
  to: IUserModel;
}
