import { Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { File } from '../generated/type-graphql';
import type { MyContext } from '../context';
import { CustomFileUrl } from './CustomFileUrl';
import { getPresignedUrlForGet } from '@/actions/file';

@Resolver((of) => File)
export class CustomFileResolver {
  @FieldResolver((type) => CustomFileUrl)
  async url(@Root() file: File, @Ctx() ctx: MyContext): Promise<CustomFileUrl> {
    const urls = await getPresignedUrlForGet(file.location);
    return {
      raw: urls.raw,
      lg: urls.lg,
      md: urls.md,
      sm: urls.sm,
    };
  }
}
