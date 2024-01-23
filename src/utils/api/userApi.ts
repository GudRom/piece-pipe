import { urlConfig } from "config/urlConfig";

export async function getCurrentUser(userId: number) {
  return await fetch(`${urlConfig.BASE_URL}${urlConfig.USER}/${userId}`);
}
