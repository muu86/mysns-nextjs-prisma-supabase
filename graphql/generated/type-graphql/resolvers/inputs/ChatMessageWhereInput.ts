import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatRelationFilter } from '../inputs/ChatRelationFilter';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { StringFilter } from '../inputs/StringFilter';
import { UserRelationFilter } from '../inputs/UserRelationFilter';

@TypeGraphQL.InputType('ChatMessageWhereInput', {})
export class ChatMessageWhereInput {
  @TypeGraphQL.Field((_type) => [ChatMessageWhereInput], {
    nullable: true,
  })
  AND?: ChatMessageWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageWhereInput], {
    nullable: true,
  })
  OR?: ChatMessageWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageWhereInput], {
    nullable: true,
  })
  NOT?: ChatMessageWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  message?: StringFilter | undefined;

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

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => ChatRelationFilter, {
    nullable: true,
  })
  chat?: ChatRelationFilter | undefined;
}
