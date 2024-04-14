import KeyCloak from 'next-auth/providers/keycloak';
import type { NextAuthConfig } from 'next-auth';

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
      console.log('in signin', user);

      return true;
    },
    jwt({ token, user }) {
      console.log('in jwt function ', user);
      return token;
    },
  },
} satisfies NextAuthConfig;
