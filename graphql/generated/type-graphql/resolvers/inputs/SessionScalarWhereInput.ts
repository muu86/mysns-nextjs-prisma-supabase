import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { StringFilter } from '../inputs/StringFilter';

@TypeGraphQL.InputType('SessionScalarWhereInput', {})
export class SessionScalarWhereInput {
  @TypeGraphQL.Field((_type) => [SessionScalarWhereInput], {
    nullable: true,
  })
  AND?: SessionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SessionScalarWhereInput], {
    nullable: true,
  })
  OR?: SessionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SessionScalarWhereInput], {
    nullable: true,
  })
  NOT?: SessionScalarWhereInput[] | undefined;

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
}
