import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostUpdateWithoutFilesInput } from '../inputs/PostUpdateWithoutFilesInput';
import { PostWhereInput } from '../inputs/PostWhereInput';

@TypeGraphQL.InputType('PostUpdateToOneWithWhereWithoutFilesInput', {})
export class PostUpdateToOneWithWhereWithoutFilesInput {
  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateWithoutFilesInput, {
    nullable: false,
  })
  data!: PostUpdateWithoutFilesInput;
}
