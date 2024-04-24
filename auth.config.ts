import type { NextAuthConfig } from 'next-auth';
import KeyCloak from 'next-auth/providers/keycloak';
import Kakao from 'next-auth/providers/kakao';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import prisma from '@/lib/prisma';

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
      },
      authorize: async (credentials) => {
        if (!credentials.email) return null;
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });
        if (!user) return null;

        return {
          id: user.id + '',
          email: user.email,
          image: user.image,
          name: user.name,
          role: user.role,
          username: user.username || undefined,
        };
      },
    }),
    KeyCloak({
      issuer: process.env.AUTH_KEYCLOAK_ISSUER,
      clientId: process.env.AUTH_KEYCLOAK_ID,
      clientSecret: process.env.AUTH_KEYCLOAK_SECRET,
    }),
    Kakao({
      clientId: process.env.AUTH_KAKAO_ID,
      clientSecret: process.env.AUTH_KAKAO_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: process.env.AUTH_SECRET,
  session: { strategy: 'jwt' },
  callbacks: {
    jwt({ token, user, trigger, session }) {
      // console.log('user', user);
      if (user) {
        token.role = user.role;
        token.username = user.username;
      }

      if (trigger === 'update') {
        token.role = session.role;
        token.username = session.username;
      }

      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      session.user.username = token.username;
      return session;
    },
  },
} satisfies NextAuthConfig;

declare module '@auth/core/types' {
  interface User {
    username?: string;
    role?: string;
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    username?: string;
    role?: string;
  }
}
