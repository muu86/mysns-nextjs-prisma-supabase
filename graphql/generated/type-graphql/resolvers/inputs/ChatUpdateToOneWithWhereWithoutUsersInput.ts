import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUpdateWithoutUsersInput } from '../inputs/ChatUpdateWithoutUsersInput';
import { ChatWhereInput } from '../inputs/ChatWhereInput';

@TypeGraphQL.InputType('ChatUpdateToOneWithWhereWithoutUsersInput', {})
export class ChatUpdateToOneWithWhereWithoutUsersInput {
  @TypeGraphQL.Field((_type) => ChatWhereInput, {
    nullable: true,
  })
  where?: ChatWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ChatUpdateWithoutUsersInput, {
    nullable: false,
  })
  data!: ChatUpdateWithoutUsersInput;
}
