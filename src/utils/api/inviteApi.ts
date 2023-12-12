import { urlConfig } from "config/urlConfig";

export async function getAllWigwams(userId: number) {
  const res = await fetch(
    `${urlConfig.BASE_URL}${urlConfig.WIGWAM}?invites.to=${userId}`
  );
  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
}
