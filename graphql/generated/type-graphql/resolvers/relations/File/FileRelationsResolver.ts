import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { File } from '../../../models/File';
import { PostFile } from '../../../models/PostFile';
import { UserFile } from '../../../models/UserFile';
import { FileFilesArgs } from './args/FileFilesArgs';
import { FilePostsArgs } from './args/FilePostsArgs';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => File)
export class FileRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [PostFile], {
    nullable: false,
  })
  async posts(
    @TypeGraphQL.Root() file: File,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FilePostsArgs
  ): Promise<PostFile[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .file.findUniqueOrThrow({
        where: {
          id: file.id,
        },
      })
      .posts({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [UserFile], {
    nullable: false,
  })
  async files(
    @TypeGraphQL.Root() file: File,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FileFilesArgs
  ): Promise<UserFile[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .file.findUniqueOrThrow({
        where: {
          id: file.id,
        },
      })
      .files({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
