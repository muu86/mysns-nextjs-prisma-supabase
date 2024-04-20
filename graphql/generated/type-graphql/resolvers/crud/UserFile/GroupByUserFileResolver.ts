import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { GroupByUserFileArgs } from './args/GroupByUserFileArgs';
import { UserFile } from '../../../models/UserFile';
import { UserFileGroupBy } from '../../outputs/UserFileGroupBy';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => UserFile)
export class GroupByUserFileResolver {
  @TypeGraphQL.Query((_returns) => [UserFileGroupBy], {
    nullable: false,
  })
  async groupByUserFile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByUserFileArgs
  ): Promise<UserFileGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userFile.groupBy({
      ...args,
      ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
    });
  }
}
