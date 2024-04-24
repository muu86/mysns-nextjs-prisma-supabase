import { auth, signIn } from '@/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default async function Page() {
  const session = await auth();
  console.log(session);

  async function keycloakAction() {
    'use server';
    await signIn('keycloak', { redirectTo: '/login/start' });
  }

  async function kakaoAction() {
    'use server';
    await signIn('kakao', { redirectTo: '/login/start' });
  }

  async function googleAction() {
    'use server';
    await signIn('google', { redirectTo: '/login/start' });
  }

  async function credentialsAction(formData: FormData) {
    'use server';
    formData.append('redirectTo', '/login/start');
    await signIn('credentials', formData);
  }

  return (
    <div className="w-full lg:min-h-[600px] xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-10">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">로그인</h1>
            {/* <p className="text-balance text-muted-foreground">소셜 로그인만 가능합니다</p> */}
          </div>
          <div className="grid gap-4">
            <form className="flex flex-col gap-2" action={credentialsAction}>
              <label>
                이메일
                <Input name="email" type="email" />
              </label>
              <Button type="submit" variant="outline" className="w-full">
                테스트 아이디 로그인
              </Button>
              <span>테스트 아이디 1:</span>
              <span className="text-destructive">user1@k.com</span>
              <span>테스트 아이디 2:</span>
              <span className="text-destructive">user2@k.com</span>
            </form>
          </div>
          <div className="grid gap-4">
            {/* <form action={keycloakAction}>
              <Button type="submit" variant="outline" className="w-full">
                키클록(테스트) 로그인
              </Button>
            </form>
            <form action={kakaoAction}>
              <Button type="submit" variant="outline" className="w-full">
                카카오 로그인
              </Button>
            </form> */}
            <form action={googleAction}>
              <Button type="submit" variant="outline" className="w-full">
                구글 로그인
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
