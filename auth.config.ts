import type { NextAuthConfig } from 'next-auth';
import KeyCloak from 'next-auth/providers/keycloak';
import Kakao from 'next-auth/providers/kakao';
import Google from 'next-auth/providers/google';

export default {
  providers: [
    KeyCloak({
      issuer: 'http://localhost:3333/realms/master',
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
