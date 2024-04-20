import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatCreateNestedOneWithoutUsersInput } from '../inputs/ChatCreateNestedOneWithoutUsersInput';

@TypeGraphQL.InputType('ChatUserCreateWithoutUserInput', {})
export class ChatUserCreateWithoutUserInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => ChatCreateNestedOneWithoutUsersInput, {
    nullable: false,
  })
  chat!: ChatCreateNestedOneWithoutUsersInput;
}
