import { NextResponse } from 'next/server';
import { auth } from './auth';

export default auth((request) => {
  if (request.nextUrl.pathname.match(/^(\/n\/post|\/chat)/)) {
    if (!request.auth?.user || request.auth.user.role !== 'WRITE') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
});
