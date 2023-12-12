import { urlConfig } from "config/urlConfig";
import { PatchWigwamDto } from "utils/types/dto/wigwam/PatchWigwamDto";
import { PostWigwamDto } from "utils/types/dto/wigwam/PostWigwamDto";

export async function getAllWigwams(userId: number) {
  const res = await fetch(
    `${urlConfig.BASE_URL}${urlConfig.WIGWAM}?wigwam.ownerId=${userId}`
  );
  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
}

export async function postWigwam(data: PostWigwamDto) {
  const res = await fetch(`${urlConfig.BASE_URL}${urlConfig.WIGWAM}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to post data");
  }
  return res.json();
}

export async function patchWigwam(data: PatchWigwamDto, id: number) {
  const res = await fetch(`${urlConfig.BASE_URL}${urlConfig.WIGWAM}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to patch data");
  }
  return res.json();
}

export async function deleteWigwam(id: number) {
  const res = await fetch(`${urlConfig.BASE_URL}${urlConfig.WIGWAM}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to patch data");
  }
  return res.json();
}
