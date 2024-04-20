import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';

@TypeGraphQL.InputType('ChatUserScalarWhereInput', {})
export class ChatUserScalarWhereInput {
  @TypeGraphQL.Field((_type) => [ChatUserScalarWhereInput], {
    nullable: true,
  })
  AND?: ChatUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserScalarWhereInput], {
    nullable: true,
  })
  OR?: ChatUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserScalarWhereInput], {
    nullable: true,
  })
  NOT?: ChatUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

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
