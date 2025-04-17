declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      name: string;
      email: string;
      user_id: string;
    };
  }
}
