import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { FindUniqueFileArgs } from './args/FindUniqueFileArgs';
import { File } from '../../../models/File';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => File)
export class FindUniqueFileResolver {
  @TypeGraphQL.Query((_returns) => File, {
    nullable: true,
  })
  async file(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueFileArgs
  ): Promise<File | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).file.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
