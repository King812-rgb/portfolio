import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";
import type { Account, Profile, NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { getUser } from "@/app/api/user/getUser";
import { createUser } from "@/app/api/user/createUser";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async jwt({
      token,
      account,
      profile,
    }: {
      token: JWT;
      account?: Account | null;
      profile?:
        | (Profile & {
            sub: string;
            name?: string | null;
            email?: string | null;
          })
        | null;
    }): Promise<JWT | null> {
      if (account && profile) {
        if (process.env.ALLOWED_USER != profile.sub) {
          console.log("Unauthorized user:", profile.name);
          return null;
        }
        const userOnDB = await getUser(profile.sub);
        if (!userOnDB) {
          const created = await createUser({
            user_id: String(profile.sub),
            name: String(profile.name),
            email: String(profile.email),
            created_at: null,
            updated_at: null,
          });
          if (!created) throw new Error("Failed to create user");
        }
        token.user_id = profile.sub;
        token.name = profile.name;
        token.email = profile.email;
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session | null> {
      if (!token?.accessToken) {
        return null;
      }
      session.accessToken = token.accessToken as string;
      session.user = {
        name: token.name as string,
        email: token.email as string,
        user_id: token.user_id as string,
      };
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
