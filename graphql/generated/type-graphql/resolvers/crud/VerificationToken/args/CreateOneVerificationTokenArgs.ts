import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { VerificationTokenCreateInput } from '../../../inputs/VerificationTokenCreateInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class CreateOneVerificationTokenArgs {
  @TypeGraphQL.Field((_type) => VerificationTokenCreateInput, {
    nullable: false,
  })
  data!: VerificationTokenCreateInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
