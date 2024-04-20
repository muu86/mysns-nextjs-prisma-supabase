import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileWhereInput } from '../inputs/PostFileWhereInput';

@TypeGraphQL.InputType('PostFileListRelationFilter', {})
export class PostFileListRelationFilter {
  @TypeGraphQL.Field((_type) => PostFileWhereInput, {
    nullable: true,
  })
  every?: PostFileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => PostFileWhereInput, {
    nullable: true,
  })
  some?: PostFileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => PostFileWhereInput, {
    nullable: true,
  })
  none?: PostFileWhereInput | undefined;
}
