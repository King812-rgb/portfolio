import { callApi } from "./callApi";

export async function getWorkListUtil(user_id: string) {
  const response = await callApi(`/works/${user_id}`, "GET", null);
  if (response === null || response.status !== "success") {
    console.error("Failed to get work list");
    console.error(response.status);
    console.error(response.error.message);
    return [];
  }
  return response.works;
}
