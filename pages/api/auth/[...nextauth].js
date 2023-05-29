/** @format */

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  //https://next-auth.js.org/providers/google
  providers: [
    GoogleProvider({
      //https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  //https://generate-secret.vercel.app/32
  secret: process.env.SECRET_KEY,
};

export default NextAuth(authOptions);
