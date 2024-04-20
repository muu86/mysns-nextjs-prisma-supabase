import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserWhereInput } from '../inputs/ChatUserWhereInput';

@TypeGraphQL.InputType('ChatUserListRelationFilter', {})
export class ChatUserListRelationFilter {
  @TypeGraphQL.Field((_type) => ChatUserWhereInput, {
    nullable: true,
  })
  every?: ChatUserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ChatUserWhereInput, {
    nullable: true,
  })
  some?: ChatUserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ChatUserWhereInput, {
    nullable: true,
  })
  none?: ChatUserWhereInput | undefined;
}
