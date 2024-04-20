import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatCreateWithoutUsersInput } from '../inputs/ChatCreateWithoutUsersInput';
import { ChatUpdateWithoutUsersInput } from '../inputs/ChatUpdateWithoutUsersInput';
import { ChatWhereInput } from '../inputs/ChatWhereInput';

@TypeGraphQL.InputType('ChatUpsertWithoutUsersInput', {})
export class ChatUpsertWithoutUsersInput {
  @TypeGraphQL.Field((_type) => ChatUpdateWithoutUsersInput, {
    nullable: false,
  })
  update!: ChatUpdateWithoutUsersInput;

  @TypeGraphQL.Field((_type) => ChatCreateWithoutUsersInput, {
    nullable: false,
  })
  create!: ChatCreateWithoutUsersInput;

  @TypeGraphQL.Field((_type) => ChatWhereInput, {
    nullable: true,
  })
  where?: ChatWhereInput | undefined;
}
