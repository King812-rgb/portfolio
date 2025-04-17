import { NextResponse } from "next/server";
import { getWorkListUtil } from "@/app/lib/getWorkListUtil";
export async function GET() {
  try {
    const user_id = process.env.ALLOWED_USER;
    if (!user_id) {
      console.error("env.ALLOWED_USER is not set");
      return NextResponse.json({ status: "error" }, { status: 500 });
    }
    const response = await getWorkListUtil(user_id);
    if (!response) {
      return NextResponse.json({ status: "error" }, { status: 500 });
    }
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
