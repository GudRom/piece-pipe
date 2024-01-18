import { urlConfig } from "config/urlConfig";

export async function getCurrentUser(userId: number) {
  const res = await fetch(`${urlConfig.BASE_URL}${urlConfig.USER}/${userId}`);
  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
}
