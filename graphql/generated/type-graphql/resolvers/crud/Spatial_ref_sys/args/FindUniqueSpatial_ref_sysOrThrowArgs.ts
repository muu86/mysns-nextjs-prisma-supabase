import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Spatial_ref_sysWhereUniqueInput } from '../../../inputs/Spatial_ref_sysWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class FindUniqueSpatial_ref_sysOrThrowArgs {
  @TypeGraphQL.Field((_type) => Spatial_ref_sysWhereUniqueInput, {
    nullable: false,
  })
  where!: Spatial_ref_sysWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
