import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { AggregateUserFileArgs } from './args/AggregateUserFileArgs';
import { UserFile } from '../../../models/UserFile';
import { AggregateUserFile } from '../../outputs/AggregateUserFile';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => UserFile)
export class AggregateUserFileResolver {
  @TypeGraphQL.Query((_returns) => AggregateUserFile, {
    nullable: false,
  })
  async aggregateUserFile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateUserFileArgs
  ): Promise<AggregateUserFile> {
    return getPrismaFromContext(ctx).userFile.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
