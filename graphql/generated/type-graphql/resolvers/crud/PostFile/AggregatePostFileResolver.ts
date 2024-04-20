import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { AggregatePostFileArgs } from './args/AggregatePostFileArgs';
import { PostFile } from '../../../models/PostFile';
import { AggregatePostFile } from '../../outputs/AggregatePostFile';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => PostFile)
export class AggregatePostFileResolver {
  @TypeGraphQL.Query((_returns) => AggregatePostFile, {
    nullable: false,
  })
  async aggregatePostFile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregatePostFileArgs
  ): Promise<AggregatePostFile> {
    return getPrismaFromContext(ctx).postFile.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
