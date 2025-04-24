import { DefaultSession, DefaultJWT } from "next-auth";
import "@auth/core/jwt";

interface CustomUser {
  user_id: string;
  name: string;
  email: string;
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken?: string;
    user: CustomUser;
  }
}

declare module "@auth/core/jwt" {
  interface JWT extends DefaultJWT {
    accessToken?: string;
    user: CustomUser;
  }
}
