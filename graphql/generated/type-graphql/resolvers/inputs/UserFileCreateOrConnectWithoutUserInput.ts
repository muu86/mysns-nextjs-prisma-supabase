import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileCreateWithoutUserInput } from '../inputs/UserFileCreateWithoutUserInput';
import { UserFileWhereUniqueInput } from '../inputs/UserFileWhereUniqueInput';

@TypeGraphQL.InputType('UserFileCreateOrConnectWithoutUserInput', {})
export class UserFileCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => UserFileWhereUniqueInput, {
    nullable: false,
  })
  where!: UserFileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserFileCreateWithoutUserInput, {
    nullable: false,
  })
  create!: UserFileCreateWithoutUserInput;
}
