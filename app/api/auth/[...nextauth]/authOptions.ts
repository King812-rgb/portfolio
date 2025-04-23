import { NextAuthOptions } from "next-auth";
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
    async jwt({ token, account, profile }) {
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
        token.user = {
          user_id: profile.sub,
          name: profile.name,
          email: profile.email,
        };
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (!token?.accessToken) {
        return null;
      }
      session.accessToken = token.accessToken as string;
      session.user = token.user as {
        user_id: string;
        name: string;
        email: string;
      };
      return session;
    },
  },
};
