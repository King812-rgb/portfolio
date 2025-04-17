import NextAuth from "next-auth";
import { authOptions } from "./authOptions";

export const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
