import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { FileOrderByWithRelationInput } from '../inputs/FileOrderByWithRelationInput';
import { PostOrderByWithRelationInput } from '../inputs/PostOrderByWithRelationInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('PostFileOrderByWithRelationInput', {})
export class PostFileOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  postId?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  fileId?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => FileOrderByWithRelationInput, {
    nullable: true,
  })
  file?: FileOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => PostOrderByWithRelationInput, {
    nullable: true,
  })
  post?: PostOrderByWithRelationInput | undefined;
}
