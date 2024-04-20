import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { UpdateOneSpatial_ref_sysArgs } from './args/UpdateOneSpatial_ref_sysArgs';
import { Spatial_ref_sys } from '../../../models/Spatial_ref_sys';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => Spatial_ref_sys)
export class UpdateOneSpatial_ref_sysResolver {
  @TypeGraphQL.Mutation((_returns) => Spatial_ref_sys, {
    nullable: true,
  })
  async updateOneSpatial_ref_sys(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneSpatial_ref_sysArgs
  ): Promise<Spatial_ref_sys | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spatial_ref_sys.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
