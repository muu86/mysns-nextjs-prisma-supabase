import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { VerificationTokenWhereUniqueInput } from '../../../inputs/VerificationTokenWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class FindUniqueVerificationTokenArgs {
  @TypeGraphQL.Field((_type) => VerificationTokenWhereUniqueInput, {
    nullable: false,
  })
  where!: VerificationTokenWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
