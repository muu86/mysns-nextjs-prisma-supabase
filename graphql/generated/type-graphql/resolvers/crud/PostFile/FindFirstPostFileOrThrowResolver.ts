import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { FindFirstPostFileOrThrowArgs } from './args/FindFirstPostFileOrThrowArgs';
import { PostFile } from '../../../models/PostFile';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => PostFile)
export class FindFirstPostFileOrThrowResolver {
  @TypeGraphQL.Query((_returns) => PostFile, {
    nullable: true,
  })
  async findFirstPostFileOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstPostFileOrThrowArgs
  ): Promise<PostFile | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postFile.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
