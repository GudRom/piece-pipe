import { urlConfig } from "config/urlConfig";
import { GetInvitesDto } from "utils/types/dto/invite/GetInviteDto";

export async function getInvites({ type, userId }: GetInvitesDto) {
  const res = await fetch(
    `${urlConfig.BASE_URL}${urlConfig.INVITE}?${type}.id=${userId}`
  );
  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
}
