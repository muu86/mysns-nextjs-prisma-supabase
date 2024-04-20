import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Spatial_ref_sysCreateInput } from '../../../inputs/Spatial_ref_sysCreateInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class CreateOneSpatial_ref_sysArgs {
  @TypeGraphQL.Field((_type) => Spatial_ref_sysCreateInput, {
    nullable: false,
  })
  data!: Spatial_ref_sysCreateInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
