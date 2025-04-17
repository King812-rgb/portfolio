import { callApi } from "@/app/lib/callApi";
import { User } from "@/app/types/User";

export async function createUser(user: User): Promise<boolean> {
  const response = await callApi(`/user/create`, "POST", user);
  console.log("response:", response);
  if (response === null || response.status !== "success") {
    console.log("Failed to create user");
    console.log("status:", response?.status);
    console.log("message:", response?.error.message);
    return false;
  }
  return true;
}