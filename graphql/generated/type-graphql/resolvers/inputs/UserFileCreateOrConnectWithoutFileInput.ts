import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileCreateWithoutFileInput } from '../inputs/UserFileCreateWithoutFileInput';
import { UserFileWhereUniqueInput } from '../inputs/UserFileWhereUniqueInput';

@TypeGraphQL.InputType('UserFileCreateOrConnectWithoutFileInput', {})
export class UserFileCreateOrConnectWithoutFileInput {
  @TypeGraphQL.Field((_type) => UserFileWhereUniqueInput, {
    nullable: false,
  })
  where!: UserFileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserFileCreateWithoutFileInput, {
    nullable: false,
  })
  create!: UserFileCreateWithoutFileInput;
}
