import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';

@TypeGraphQL.InputType('UserFileScalarWhereInput', {})
export class UserFileScalarWhereInput {
  @TypeGraphQL.Field((_type) => [UserFileScalarWhereInput], {
    nullable: true,
  })
  AND?: UserFileScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileScalarWhereInput], {
    nullable: true,
  })
  OR?: UserFileScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileScalarWhereInput], {
    nullable: true,
  })
  NOT?: UserFileScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  fileId?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;
}
