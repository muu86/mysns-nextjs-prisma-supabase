import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { AccountUpdateInput } from '../../../inputs/AccountUpdateInput';
import { AccountWhereUniqueInput } from '../../../inputs/AccountWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpdateOneAccountArgs {
  @TypeGraphQL.Field((_type) => AccountUpdateInput, {
    nullable: false,
  })
  data!: AccountUpdateInput;

  @TypeGraphQL.Field((_type) => AccountWhereUniqueInput, {
    nullable: false,
  })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
