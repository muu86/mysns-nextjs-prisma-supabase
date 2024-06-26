import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { VerificationTokenCreateInput } from '../../../inputs/VerificationTokenCreateInput';
import { VerificationTokenUpdateInput } from '../../../inputs/VerificationTokenUpdateInput';
import { VerificationTokenWhereUniqueInput } from '../../../inputs/VerificationTokenWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpsertOneVerificationTokenArgs {
  @TypeGraphQL.Field((_type) => VerificationTokenWhereUniqueInput, {
    nullable: false,
  })
  where!: VerificationTokenWhereUniqueInput;

  @TypeGraphQL.Field((_type) => VerificationTokenCreateInput, {
    nullable: false,
  })
  create!: VerificationTokenCreateInput;

  @TypeGraphQL.Field((_type) => VerificationTokenUpdateInput, {
    nullable: false,
  })
  update!: VerificationTokenUpdateInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
