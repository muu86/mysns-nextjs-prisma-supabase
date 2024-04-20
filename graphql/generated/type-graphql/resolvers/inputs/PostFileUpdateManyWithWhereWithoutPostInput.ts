import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileScalarWhereInput } from '../inputs/PostFileScalarWhereInput';
import { PostFileUpdateManyMutationInput } from '../inputs/PostFileUpdateManyMutationInput';

@TypeGraphQL.InputType('PostFileUpdateManyWithWhereWithoutPostInput', {})
export class PostFileUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field((_type) => PostFileScalarWhereInput, {
    nullable: false,
  })
  where!: PostFileScalarWhereInput;

  @TypeGraphQL.Field((_type) => PostFileUpdateManyMutationInput, {
    nullable: false,
  })
  data!: PostFileUpdateManyMutationInput;
}
