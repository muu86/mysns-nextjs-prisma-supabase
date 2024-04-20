import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserAddressWhereUniqueInput } from '../../../inputs/UserAddressWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class FindUniqueUserAddressOrThrowArgs {
  @TypeGraphQL.Field((_type) => UserAddressWhereUniqueInput, {
    nullable: false,
  })
  where!: UserAddressWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
