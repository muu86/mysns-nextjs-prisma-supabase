import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { AccountCreateInput } from '../../../inputs/AccountCreateInput';
import { AccountUpdateInput } from '../../../inputs/AccountUpdateInput';
import { AccountWhereUniqueInput } from '../../../inputs/AccountWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpsertOneAccountArgs {
  @TypeGraphQL.Field((_type) => AccountWhereUniqueInput, {
    nullable: false,
  })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AccountCreateInput, {
    nullable: false,
  })
  create!: AccountCreateInput;

  @TypeGraphQL.Field((_type) => AccountUpdateInput, {
    nullable: false,
  })
  update!: AccountUpdateInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
