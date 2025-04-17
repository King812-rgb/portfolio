import { NextRequest, NextResponse } from "next/server";
import { callApi } from "@/app/lib/callApi";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json(
      { status: "error", message: "Unauthorized" },
      { status: 401 },
    );
  }
  try {
    const formData = await req.json();
    formData.user_id = session.user.user_id;
    const response = await callApi(`/works/create`, "POST", formData);

    if (response === null || response.status !== "success") {
      console.error("Failed to create work");
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
