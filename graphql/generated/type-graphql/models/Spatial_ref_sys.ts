import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../scalars';

/**
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
@TypeGraphQL.ObjectType('Spatial_ref_sys', {
  description:
    'This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.',
})
export class Spatial_ref_sys {
  @TypeGraphQL.Field((_type) => TypeGraphQL.ID, {
    nullable: false,
  })
  srid!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  auth_name?: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  auth_srid?: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  srtext?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  proj4text?: string | null;
}
