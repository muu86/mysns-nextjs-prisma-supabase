import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageCreateManyUserInputEnvelope } from '../inputs/ChatMessageCreateManyUserInputEnvelope';
import { ChatMessageCreateOrConnectWithoutUserInput } from '../inputs/ChatMessageCreateOrConnectWithoutUserInput';
import { ChatMessageCreateWithoutUserInput } from '../inputs/ChatMessageCreateWithoutUserInput';
import { ChatMessageWhereUniqueInput } from '../inputs/ChatMessageWhereUniqueInput';

@TypeGraphQL.InputType('ChatMessageCreateNestedManyWithoutUserInput', {})
export class ChatMessageCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [ChatMessageCreateWithoutUserInput], {
    nullable: true,
  })
  create?: ChatMessageCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => ChatMessageCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: ChatMessageCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageWhereUniqueInput], {
    nullable: true,
  })
  connect?: ChatMessageWhereUniqueInput[] | undefined;
}
