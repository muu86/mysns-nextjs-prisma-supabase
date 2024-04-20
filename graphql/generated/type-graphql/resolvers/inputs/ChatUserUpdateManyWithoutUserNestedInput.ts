import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserCreateManyUserInputEnvelope } from '../inputs/ChatUserCreateManyUserInputEnvelope';
import { ChatUserCreateOrConnectWithoutUserInput } from '../inputs/ChatUserCreateOrConnectWithoutUserInput';
import { ChatUserCreateWithoutUserInput } from '../inputs/ChatUserCreateWithoutUserInput';
import { ChatUserScalarWhereInput } from '../inputs/ChatUserScalarWhereInput';
import { ChatUserUpdateManyWithWhereWithoutUserInput } from '../inputs/ChatUserUpdateManyWithWhereWithoutUserInput';
import { ChatUserUpdateWithWhereUniqueWithoutUserInput } from '../inputs/ChatUserUpdateWithWhereUniqueWithoutUserInput';
import { ChatUserUpsertWithWhereUniqueWithoutUserInput } from '../inputs/ChatUserUpsertWithWhereUniqueWithoutUserInput';
import { ChatUserWhereUniqueInput } from '../inputs/ChatUserWhereUniqueInput';

@TypeGraphQL.InputType('ChatUserUpdateManyWithoutUserNestedInput', {})
export class ChatUserUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field((_type) => [ChatUserCreateWithoutUserInput], {
    nullable: true,
  })
  create?: ChatUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: ChatUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: ChatUserUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => ChatUserCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: ChatUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserWhereUniqueInput], {
    nullable: true,
  })
  set?: ChatUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ChatUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserWhereUniqueInput], {
    nullable: true,
  })
  delete?: ChatUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserWhereUniqueInput], {
    nullable: true,
  })
  connect?: ChatUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: ChatUserUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: ChatUserUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ChatUserScalarWhereInput[] | undefined;
}
