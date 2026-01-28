import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma, ensureUserWorkspaceAndAffiliate } from "@fastcuts/db";
import { type NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (new URL(url).origin === baseUrl) return url;
      return `${baseUrl}/app/projects`;
    },
  },
  events: {
    async createUser({ user }) {
      if (!user.id) return;
      await ensureUserWorkspaceAndAffiliate(user.id, user.email ?? "");
    },
  },
};
