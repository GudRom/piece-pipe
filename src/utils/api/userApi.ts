import { urlConfig } from "config/urlConfig";

export async function getAllUsers() {
  const res = await fetch(`${urlConfig.BASE_URL}${urlConfig.USER}`);
  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
}
