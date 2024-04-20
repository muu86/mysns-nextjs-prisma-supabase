import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { IntNullableFilter } from '../inputs/IntNullableFilter';
import { Spatial_ref_sysWhereInput } from '../inputs/Spatial_ref_sysWhereInput';
import { StringNullableFilter } from '../inputs/StringNullableFilter';

@TypeGraphQL.InputType('Spatial_ref_sysWhereUniqueInput', {})
export class Spatial_ref_sysWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  srid?: number | undefined;

  @TypeGraphQL.Field((_type) => [Spatial_ref_sysWhereInput], {
    nullable: true,
  })
  AND?: Spatial_ref_sysWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [Spatial_ref_sysWhereInput], {
    nullable: true,
  })
  OR?: Spatial_ref_sysWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [Spatial_ref_sysWhereInput], {
    nullable: true,
  })
  NOT?: Spatial_ref_sysWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  auth_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableFilter, {
    nullable: true,
  })
  auth_srid?: IntNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  srtext?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  proj4text?: StringNullableFilter | undefined;
}
