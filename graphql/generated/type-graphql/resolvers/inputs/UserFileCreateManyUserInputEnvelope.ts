import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileCreateManyUserInput } from '../inputs/UserFileCreateManyUserInput';

@TypeGraphQL.InputType('UserFileCreateManyUserInputEnvelope', {})
export class UserFileCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [UserFileCreateManyUserInput], {
    nullable: false,
  })
  data!: UserFileCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
