import { NextAuthOptions } from "next-auth";
import { db } from "./db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { nanoid } from "nanoid";
import { enqueueSnackbar } from "@/lib/notistack";

const NODE_ENV = process.env.NODE_ENV;

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  debug: NODE_ENV === "development" ? true : false,
  providers: [
    Credentials({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials || {};

        if (email && password) {
          const dbUser = await db.user.findUniqueOrThrow({
            where: {
              email_password: { email, password },
            },
          });

          if (dbUser) return dbUser;
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) session.user = token;

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: String(token.email),
        },
      });

      if (!dbUser) {
        if (user) {
          token.id = user.id;
        }
        return token;
      }

      if (!dbUser.username) {
        await db.user.update({
          where: {
            id: dbUser.id,
          },
          data: {
            username: nanoid(10),
          },
        });
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        username: dbUser.username,
      };
    },
  },
};
