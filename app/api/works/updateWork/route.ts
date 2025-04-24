import { NextRequest, NextResponse } from "next/server";
import { callApi } from "@/app/lib/callApi";
import { auth } from "@/app/auth";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user.user_id) {
    return NextResponse.json(
      { status: "error", message: "Unauthorized" },
      { status: 401 },
    );
  }
  try {
    const formData = await req.json();
    formData.user_id = session.user.user_id;
    const response = await callApi(`/works/update`, "POST", {
      ...formData,
      id: formData.id,
    });

    if (response === null || response.status !== "success") {
      console.error("Failed to update work");
      console.error(response.status);
      console.error(response.error.message);
      return NextResponse.json({ status: "error" }, { status: 500 });
    }

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
