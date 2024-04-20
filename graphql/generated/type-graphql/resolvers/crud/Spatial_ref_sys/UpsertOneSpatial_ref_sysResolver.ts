import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { UpsertOneSpatial_ref_sysArgs } from './args/UpsertOneSpatial_ref_sysArgs';
import { Spatial_ref_sys } from '../../../models/Spatial_ref_sys';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => Spatial_ref_sys)
export class UpsertOneSpatial_ref_sysResolver {
  @TypeGraphQL.Mutation((_returns) => Spatial_ref_sys, {
    nullable: false,
  })
  async upsertOneSpatial_ref_sys(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneSpatial_ref_sysArgs
  ): Promise<Spatial_ref_sys> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spatial_ref_sys.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
