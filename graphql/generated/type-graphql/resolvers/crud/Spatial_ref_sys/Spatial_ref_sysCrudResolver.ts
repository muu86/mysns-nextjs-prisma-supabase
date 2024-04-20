import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { AggregateSpatial_ref_sysArgs } from './args/AggregateSpatial_ref_sysArgs';
import { CreateManySpatial_ref_sysArgs } from './args/CreateManySpatial_ref_sysArgs';
import { CreateOneSpatial_ref_sysArgs } from './args/CreateOneSpatial_ref_sysArgs';
import { DeleteManySpatial_ref_sysArgs } from './args/DeleteManySpatial_ref_sysArgs';
import { DeleteOneSpatial_ref_sysArgs } from './args/DeleteOneSpatial_ref_sysArgs';
import { FindFirstSpatial_ref_sysArgs } from './args/FindFirstSpatial_ref_sysArgs';
import { FindFirstSpatial_ref_sysOrThrowArgs } from './args/FindFirstSpatial_ref_sysOrThrowArgs';
import { FindManySpatial_ref_sysArgs } from './args/FindManySpatial_ref_sysArgs';
import { FindUniqueSpatial_ref_sysArgs } from './args/FindUniqueSpatial_ref_sysArgs';
import { FindUniqueSpatial_ref_sysOrThrowArgs } from './args/FindUniqueSpatial_ref_sysOrThrowArgs';
import { GroupBySpatial_ref_sysArgs } from './args/GroupBySpatial_ref_sysArgs';
import { UpdateManySpatial_ref_sysArgs } from './args/UpdateManySpatial_ref_sysArgs';
import { UpdateOneSpatial_ref_sysArgs } from './args/UpdateOneSpatial_ref_sysArgs';
import { UpsertOneSpatial_ref_sysArgs } from './args/UpsertOneSpatial_ref_sysArgs';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { Spatial_ref_sys } from '../../../models/Spatial_ref_sys';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregateSpatial_ref_sys } from '../../outputs/AggregateSpatial_ref_sys';
import { Spatial_ref_sysGroupBy } from '../../outputs/Spatial_ref_sysGroupBy';

@TypeGraphQL.Resolver((_of) => Spatial_ref_sys)
export class Spatial_ref_sysCrudResolver {
  @TypeGraphQL.Query((_returns) => AggregateSpatial_ref_sys, {
    nullable: false,
  })
  async aggregateSpatial_ref_sys(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateSpatial_ref_sysArgs
  ): Promise<AggregateSpatial_ref_sys> {
    return getPrismaFromContext(ctx).spatial_ref_sys.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManySpatial_ref_sys(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManySpatial_ref_sysArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spatial_ref_sys.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Spatial_ref_sys, {
    nullable: false,
  })
  async createOneSpatial_ref_sys(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneSpatial_ref_sysArgs
  ): Promise<Spatial_ref_sys> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spatial_ref_sys.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManySpatial_ref_sys(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManySpatial_ref_sysArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spatial_ref_sys.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Spatial_ref_sys, {
    nullable: true,
  })
  async deleteOneSpatial_ref_sys(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneSpatial_ref_sysArgs
  ): Promise<Spatial_ref_sys | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spatial_ref_sys.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query((_returns) => Spatial_ref_sys, {
    nullable: true,
  })
  async findFirstSpatial_ref_sysOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstSpatial_ref_sysOrThrowArgs
  ): Promise<Spatial_ref_sys | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spatial_ref_sys.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Spatial_ref_sys], {
    nullable: false,
  })
  async findManySpatial_ref_sys(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManySpatial_ref_sysArgs
  ): Promise<Spatial_ref_sys[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spatial_ref_sys.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Spatial_ref_sys, {
    nullable: true,
  })
  async findUniqueSpatial_ref_sys(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueSpatial_ref_sysArgs
  ): Promise<Spatial_ref_sys | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spatial_ref_sys.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Spatial_ref_sys, {
    nullable: true,
  })
  async findUniqueSpatial_ref_sysOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueSpatial_ref_sysOrThrowArgs
  ): Promise<Spatial_ref_sys | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spatial_ref_sys.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Spatial_ref_sysGroupBy], {
    nullable: false,
  })
  async groupBySpatial_ref_sys(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupBySpatial_ref_sysArgs
  ): Promise<Spatial_ref_sysGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spatial_ref_sys.groupBy({
      ...args,
      ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManySpatial_ref_sys(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManySpatial_ref_sysArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spatial_ref_sys.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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
