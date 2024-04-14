import authConfig from '@/auth.config';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import prisma from '@/lib/prisma';

export const { auth, handlers, signIn, signOut } = NextAuth({
  // adapter: PrismaAdapter(prisma),
  ...authConfig,
});
