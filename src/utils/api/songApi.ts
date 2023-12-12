import { urlConfig } from "config/urlConfig";

export async function getAllSongs(request: string) {
  const queries = request === "all" ? "" : `?songs=${request}`;
  const res = await fetch(`${urlConfig.BASE_URL}${urlConfig.USER}/${queries}`);
  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
}
