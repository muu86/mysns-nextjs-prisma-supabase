import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { AddressUpdateInput } from '../../../inputs/AddressUpdateInput';
import { AddressWhereUniqueInput } from '../../../inputs/AddressWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpdateOneAddressArgs {
  @TypeGraphQL.Field((_type) => AddressUpdateInput, {
    nullable: false,
  })
  data!: AddressUpdateInput;

  @TypeGraphQL.Field((_type) => AddressWhereUniqueInput, {
    nullable: false,
  })
  where!: AddressWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
