import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserAddressUpdateInput } from '../../../inputs/UserAddressUpdateInput';
import { UserAddressWhereUniqueInput } from '../../../inputs/UserAddressWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpdateOneUserAddressArgs {
  @TypeGraphQL.Field((_type) => UserAddressUpdateInput, {
    nullable: false,
  })
  data!: UserAddressUpdateInput;

  @TypeGraphQL.Field((_type) => UserAddressWhereUniqueInput, {
    nullable: false,
  })
  where!: UserAddressWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
