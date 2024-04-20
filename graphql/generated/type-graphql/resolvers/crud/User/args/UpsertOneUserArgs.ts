import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserCreateInput } from '../../../inputs/UserCreateInput';
import { UserUpdateInput } from '../../../inputs/UserUpdateInput';
import { UserWhereUniqueInput } from '../../../inputs/UserWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpsertOneUserArgs {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateInput, {
    nullable: false,
  })
  create!: UserCreateInput;

  @TypeGraphQL.Field((_type) => UserUpdateInput, {
    nullable: false,
  })
  update!: UserUpdateInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
