import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { DeleteManyUserFileArgs } from './args/DeleteManyUserFileArgs';
import { UserFile } from '../../../models/UserFile';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => UserFile)
export class DeleteManyUserFileResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyUserFile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyUserFileArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userFile.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
