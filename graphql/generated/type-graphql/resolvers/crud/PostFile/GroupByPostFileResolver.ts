import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { GroupByPostFileArgs } from './args/GroupByPostFileArgs';
import { PostFile } from '../../../models/PostFile';
import { PostFileGroupBy } from '../../outputs/PostFileGroupBy';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => PostFile)
export class GroupByPostFileResolver {
  @TypeGraphQL.Query((_returns) => [PostFileGroupBy], {
    nullable: false,
  })
  async groupByPostFile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByPostFileArgs
  ): Promise<PostFileGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postFile.groupBy({
      ...args,
      ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
    });
  }
}
