import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatCreateOrConnectWithoutUsersInput } from '../inputs/ChatCreateOrConnectWithoutUsersInput';
import { ChatCreateWithoutUsersInput } from '../inputs/ChatCreateWithoutUsersInput';
import { ChatUpdateToOneWithWhereWithoutUsersInput } from '../inputs/ChatUpdateToOneWithWhereWithoutUsersInput';
import { ChatUpsertWithoutUsersInput } from '../inputs/ChatUpsertWithoutUsersInput';
import { ChatWhereUniqueInput } from '../inputs/ChatWhereUniqueInput';

@TypeGraphQL.InputType('ChatUpdateOneRequiredWithoutUsersNestedInput', {})
export class ChatUpdateOneRequiredWithoutUsersNestedInput {
  @TypeGraphQL.Field((_type) => ChatCreateWithoutUsersInput, {
    nullable: true,
  })
  create?: ChatCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field((_type) => ChatCreateOrConnectWithoutUsersInput, {
    nullable: true,
  })
  connectOrCreate?: ChatCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field((_type) => ChatUpsertWithoutUsersInput, {
    nullable: true,
  })
  upsert?: ChatUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field((_type) => ChatWhereUniqueInput, {
    nullable: true,
  })
  connect?: ChatWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => ChatUpdateToOneWithWhereWithoutUsersInput, {
    nullable: true,
  })
  update?: ChatUpdateToOneWithWhereWithoutUsersInput | undefined;
}
