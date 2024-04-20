import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';

@TypeGraphQL.InputType('PostFileScalarWhereInput', {})
export class PostFileScalarWhereInput {
  @TypeGraphQL.Field((_type) => [PostFileScalarWhereInput], {
    nullable: true,
  })
  AND?: PostFileScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileScalarWhereInput], {
    nullable: true,
  })
  OR?: PostFileScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileScalarWhereInput], {
    nullable: true,
  })
  NOT?: PostFileScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  postId?: IntFilter | undefined;

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
