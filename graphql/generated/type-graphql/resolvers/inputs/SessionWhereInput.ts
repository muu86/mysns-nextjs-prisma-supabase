import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { StringFilter } from '../inputs/StringFilter';
import { UserRelationFilter } from '../inputs/UserRelationFilter';

@TypeGraphQL.InputType('SessionWhereInput', {})
export class SessionWhereInput {
  @TypeGraphQL.Field((_type) => [SessionWhereInput], {
    nullable: true,
  })
  AND?: SessionWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SessionWhereInput], {
    nullable: true,
  })
  OR?: SessionWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SessionWhereInput], {
    nullable: true,
  })
  NOT?: SessionWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  sessionToken?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  expires?: DateTimeFilter | undefined;

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
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;
}
