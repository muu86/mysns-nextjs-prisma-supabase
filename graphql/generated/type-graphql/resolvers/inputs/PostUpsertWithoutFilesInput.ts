import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostCreateWithoutFilesInput } from '../inputs/PostCreateWithoutFilesInput';
import { PostUpdateWithoutFilesInput } from '../inputs/PostUpdateWithoutFilesInput';
import { PostWhereInput } from '../inputs/PostWhereInput';

@TypeGraphQL.InputType('PostUpsertWithoutFilesInput', {})
export class PostUpsertWithoutFilesInput {
  @TypeGraphQL.Field((_type) => PostUpdateWithoutFilesInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutFilesInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutFilesInput, {
    nullable: false,
  })
  create!: PostCreateWithoutFilesInput;

  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;
}
