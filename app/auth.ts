import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getUser } from "@/app/api/user/getUser";
import { createUser } from "@/app/api/user/createUser";
import type { Account, Profile, Session } from "@auth/core/types";
import type { JWT } from "next-auth/jwt";

interface GoogleProfile {
  sub: string;
  name: string;
  email: string;
}

const config = {
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
  pages: {
    error: "admin/auth/error",
  },
  callbacks: {
    async signIn({ profile }: { profile?: Profile }) {
      const googleProfile = profile as GoogleProfile | undefined;
      if (!profile || process.env.ALLOWED_USER !== googleProfile?.sub) {
        console.log("Unauthorized user:", googleProfile?.name);
        return "/admin/auth/error";
      }
      return true;
    },
    async jwt({
      token,
      account,
      profile,
    }: {
      token: JWT;
      account?: Account | null;
      profile?: Profile | null;
    }): Promise<JWT | null> {
      if (account && profile) {
        const googleProfile = profile as GoogleProfile;

        const userOnDB = await getUser(googleProfile.sub);
        if (!userOnDB) {
          const created = await createUser({
            user_id: String(googleProfile.sub),
            name: String(googleProfile.name),
            email: String(googleProfile.email),
            created_at: null,
            updated_at: null,
          });
          if (!created) throw new Error("Failed to create user");
        }

        token.user = {
          user_id: googleProfile.sub,
          name: googleProfile.name,
          email: googleProfile.email,
        };
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
    }): Promise<Session> {
      if (!token?.accessToken) {
        return {
          ...session,
          user: { name: "", email: "", user_id: "" },
          accessToken: "",
        };
      }
      session.accessToken = token.accessToken;
      session.user = token.user as {
        user_id: string;
        name: string;
        email: string;
      };

      return session;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
