import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserAddressCreateInput } from '../../../inputs/UserAddressCreateInput';
import { UserAddressUpdateInput } from '../../../inputs/UserAddressUpdateInput';
import { UserAddressWhereUniqueInput } from '../../../inputs/UserAddressWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpsertOneUserAddressArgs {
  @TypeGraphQL.Field((_type) => UserAddressWhereUniqueInput, {
    nullable: false,
  })
  where!: UserAddressWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserAddressCreateInput, {
    nullable: false,
  })
  create!: UserAddressCreateInput;

  @TypeGraphQL.Field((_type) => UserAddressUpdateInput, {
    nullable: false,
  })
  update!: UserAddressUpdateInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
