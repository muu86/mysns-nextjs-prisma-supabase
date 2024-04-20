import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserCreateManyUserInputEnvelope } from '../inputs/ChatUserCreateManyUserInputEnvelope';
import { ChatUserCreateOrConnectWithoutUserInput } from '../inputs/ChatUserCreateOrConnectWithoutUserInput';
import { ChatUserCreateWithoutUserInput } from '../inputs/ChatUserCreateWithoutUserInput';
import { ChatUserWhereUniqueInput } from '../inputs/ChatUserWhereUniqueInput';

@TypeGraphQL.InputType('ChatUserCreateNestedManyWithoutUserInput', {})
export class ChatUserCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [ChatUserCreateWithoutUserInput], {
    nullable: true,
  })
  create?: ChatUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: ChatUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => ChatUserCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: ChatUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserWhereUniqueInput], {
    nullable: true,
  })
  connect?: ChatUserWhereUniqueInput[] | undefined;
}
