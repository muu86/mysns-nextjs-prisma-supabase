import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.ObjectType('Spatial_ref_sysMinAggregate', {})
export class Spatial_ref_sysMinAggregate {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  srid!: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  auth_name!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  auth_srid!: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  srtext!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  proj4text!: string | null;
}
