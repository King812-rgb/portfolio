import { callApi } from "@/app/lib/callApi";
import { User } from "@/app/types/User";

export async function getUser(user_id: string): Promise<User | null> {
  const response = await callApi(`/user/${user_id}`, "GET", null);
  if (response === null || response.status !== "success") {
    console.log("Failed to get user");
    console.log("status:", response?.status);
    console.log("message:", response?.error.message);
    return null;
  }
  return response.user;
}