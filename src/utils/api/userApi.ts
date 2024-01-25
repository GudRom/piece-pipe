import { urlConfig } from "config/urlConfig";

export async function getCurrentUser(userId: number) {
  return await fetch(`${urlConfig.BASE_URL}${urlConfig.USER}/${userId}`);
}

export async function getUsers() {
  return await fetch(`${urlConfig.BASE_URL}${urlConfig.USER}`);
}
