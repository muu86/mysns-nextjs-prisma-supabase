import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatCreateOrConnectWithoutUsersInput } from '../inputs/ChatCreateOrConnectWithoutUsersInput';
import { ChatCreateWithoutUsersInput } from '../inputs/ChatCreateWithoutUsersInput';
import { ChatWhereUniqueInput } from '../inputs/ChatWhereUniqueInput';

@TypeGraphQL.InputType('ChatCreateNestedOneWithoutUsersInput', {})
export class ChatCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field((_type) => ChatCreateWithoutUsersInput, {
    nullable: true,
  })
  create?: ChatCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field((_type) => ChatCreateOrConnectWithoutUsersInput, {
    nullable: true,
  })
  connectOrCreate?: ChatCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field((_type) => ChatWhereUniqueInput, {
    nullable: true,
  })
  connect?: ChatWhereUniqueInput | undefined;
}
