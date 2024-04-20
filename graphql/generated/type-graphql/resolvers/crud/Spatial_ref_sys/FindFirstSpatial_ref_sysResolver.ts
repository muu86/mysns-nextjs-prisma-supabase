import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { FindFirstSpatial_ref_sysArgs } from './args/FindFirstSpatial_ref_sysArgs';
import { Spatial_ref_sys } from '../../../models/Spatial_ref_sys';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => Spatial_ref_sys)
export class FindFirstSpatial_ref_sysResolver {
  @TypeGraphQL.Query((_returns) => Spatial_ref_sys, {
    nullable: true,
  })
  async findFirstSpatial_ref_sys(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstSpatial_ref_sysArgs
  ): Promise<Spatial_ref_sys | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spatial_ref_sys.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
