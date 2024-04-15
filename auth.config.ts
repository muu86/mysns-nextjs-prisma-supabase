import KeyCloak from 'next-auth/providers/keycloak';
import type { NextAuthConfig } from 'next-auth';
import { getUserByIssAndSub } from './actions/user';

export default {
  providers: [
    KeyCloak({
      issuer: 'http://localhost:3333/realms/master',
      clientId: process.env.AUTH_KEYCLOAK_ID,
      clientSecret: process.env.AUTH_KEYCLOAK_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: process.env.AUTH_SECRET,
  session: { strategy: 'jwt' },
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('[signIn] user: ', user);
      console.log('[signIn] account: ', account);
      console.log('[signIn] profile: ', profile);

      if (!account) return false;

      // const found = await getUserByIssAndSub(account.provider, profile!.sub!);
      // if (found) {
      //   user.username = found.username;
      // }

      return true;
    },
    jwt({ token, user }) {
      console.log('[jwt] token: ', token);
      console.log('[jwt] user: ', user);
      return token;
    },
  },
} satisfies NextAuthConfig;

declare module '@auth/core/types' {
  interface User {
    username?: string;
  }
  // interface Session {
  //   error?: 'RefreshAccessTokenError';
  // }
}
