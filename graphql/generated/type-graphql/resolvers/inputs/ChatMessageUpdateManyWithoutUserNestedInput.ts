import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageCreateManyUserInputEnvelope } from '../inputs/ChatMessageCreateManyUserInputEnvelope';
import { ChatMessageCreateOrConnectWithoutUserInput } from '../inputs/ChatMessageCreateOrConnectWithoutUserInput';
import { ChatMessageCreateWithoutUserInput } from '../inputs/ChatMessageCreateWithoutUserInput';
import { ChatMessageScalarWhereInput } from '../inputs/ChatMessageScalarWhereInput';
import { ChatMessageUpdateManyWithWhereWithoutUserInput } from '../inputs/ChatMessageUpdateManyWithWhereWithoutUserInput';
import { ChatMessageUpdateWithWhereUniqueWithoutUserInput } from '../inputs/ChatMessageUpdateWithWhereUniqueWithoutUserInput';
import { ChatMessageUpsertWithWhereUniqueWithoutUserInput } from '../inputs/ChatMessageUpsertWithWhereUniqueWithoutUserInput';
import { ChatMessageWhereUniqueInput } from '../inputs/ChatMessageWhereUniqueInput';

@TypeGraphQL.InputType('ChatMessageUpdateManyWithoutUserNestedInput', {})
export class ChatMessageUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field((_type) => [ChatMessageCreateWithoutUserInput], {
    nullable: true,
  })
  create?: ChatMessageCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => ChatMessageCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: ChatMessageCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageWhereUniqueInput], {
    nullable: true,
  })
  set?: ChatMessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ChatMessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageWhereUniqueInput], {
    nullable: true,
  })
  delete?: ChatMessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageWhereUniqueInput], {
    nullable: true,
  })
  connect?: ChatMessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ChatMessageScalarWhereInput[] | undefined;
}
