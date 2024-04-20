import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileCreateManyUserInputEnvelope } from '../inputs/UserFileCreateManyUserInputEnvelope';
import { UserFileCreateOrConnectWithoutUserInput } from '../inputs/UserFileCreateOrConnectWithoutUserInput';
import { UserFileCreateWithoutUserInput } from '../inputs/UserFileCreateWithoutUserInput';
import { UserFileWhereUniqueInput } from '../inputs/UserFileWhereUniqueInput';

@TypeGraphQL.InputType('UserFileCreateNestedManyWithoutUserInput', {})
export class UserFileCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [UserFileCreateWithoutUserInput], {
    nullable: true,
  })
  create?: UserFileCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: UserFileCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => UserFileCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: UserFileCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [UserFileWhereUniqueInput], {
    nullable: true,
  })
  connect?: UserFileWhereUniqueInput[] | undefined;
}
