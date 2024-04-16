import { auth, signIn } from '@/auth';
import { Button } from '@/components/ui/button';

export default async function Page() {
  const session = await auth();
  console.log(session);

  async function keycloakAction() {
    'use server';
    await signIn('keycloak', { redirectTo: '/login/start' });
  }

  return (
    <div className="w-full lg:min-h-[600px] xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">로그인</h1>
            {/* <p className="text-balance text-muted-foreground">소셜 로그인만 가능합니다</p> */}
          </div>
          <div className="grid gap-4">
            <form action={keycloakAction}>
              <Button type="submit" variant="outline" className="w-full">
                Keycloak 으로 로그인
              </Button>
            </form>
          </div>
          {/* <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
