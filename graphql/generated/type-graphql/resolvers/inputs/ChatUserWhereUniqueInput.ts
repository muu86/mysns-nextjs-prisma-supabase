import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatRelationFilter } from '../inputs/ChatRelationFilter';
import { ChatUserWhereInput } from '../inputs/ChatUserWhereInput';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { UserRelationFilter } from '../inputs/UserRelationFilter';

@TypeGraphQL.InputType('ChatUserWhereUniqueInput', {})
export class ChatUserWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserWhereInput], {
    nullable: true,
  })
  AND?: ChatUserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserWhereInput], {
    nullable: true,
  })
  OR?: ChatUserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserWhereInput], {
    nullable: true,
  })
  NOT?: ChatUserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  chatId?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => ChatRelationFilter, {
    nullable: true,
  })
  chat?: ChatRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;
}
