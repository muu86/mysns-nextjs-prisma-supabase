import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { StringFilter } from '../inputs/StringFilter';

@TypeGraphQL.InputType('ChatMessageScalarWhereInput', {})
export class ChatMessageScalarWhereInput {
  @TypeGraphQL.Field((_type) => [ChatMessageScalarWhereInput], {
    nullable: true,
  })
  AND?: ChatMessageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageScalarWhereInput], {
    nullable: true,
  })
  OR?: ChatMessageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageScalarWhereInput], {
    nullable: true,
  })
  NOT?: ChatMessageScalarWhereInput[] | undefined;

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
}
