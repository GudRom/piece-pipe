import { urlConfig } from "config/urlConfig";
import { PatchWigwamDto } from "utils/types/dto/wigwam/PatchWigwamDto";
import { PostWigwamDto } from "utils/types/dto/wigwam/PostWigwamDto";

export async function getAllWigwams() {
  const res = await fetch(
    `${urlConfig.BASE_URL}${urlConfig.WIGWAM}?_sort=id&_order=desc`
  );
  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
}

export async function getOnlyUsersWigwams(userId: number) {
  const res = await fetch(
    `${urlConfig.BASE_URL}${urlConfig.WIGWAM}?ownerId=${userId}`
  );
  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
}

export async function postWigwam(data: PostWigwamDto) {
  const res = await fetch(`${urlConfig.BASE_URL}${urlConfig.WIGWAM}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to post data");
  }
  return res.json();
}

export async function patchWigwam(data: PatchWigwamDto) {
  const res = await fetch(
    `${urlConfig.BASE_URL}${urlConfig.WIGWAM}/${data.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
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
