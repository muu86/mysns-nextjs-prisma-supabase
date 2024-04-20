import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserUpdateInput } from '../../../inputs/UserUpdateInput';
import { UserWhereUniqueInput } from '../../../inputs/UserWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpdateOneUserArgs {
  @TypeGraphQL.Field((_type) => UserUpdateInput, {
    nullable: false,
  })
  data!: UserUpdateInput;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
