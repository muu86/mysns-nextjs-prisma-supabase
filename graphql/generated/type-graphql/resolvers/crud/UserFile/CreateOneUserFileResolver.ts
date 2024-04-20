import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { CreateOneUserFileArgs } from './args/CreateOneUserFileArgs';
import { UserFile } from '../../../models/UserFile';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => UserFile)
export class CreateOneUserFileResolver {
  @TypeGraphQL.Mutation((_returns) => UserFile, {
    nullable: false,
  })
  async createOneUserFile(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneUserFileArgs
  ): Promise<UserFile> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userFile.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
