import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileUpdateWithoutPostInput } from '../inputs/PostFileUpdateWithoutPostInput';
import { PostFileWhereUniqueInput } from '../inputs/PostFileWhereUniqueInput';

@TypeGraphQL.InputType('PostFileUpdateWithWhereUniqueWithoutPostInput', {})
export class PostFileUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => PostFileWhereUniqueInput, {
    nullable: false,
  })
  where!: PostFileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostFileUpdateWithoutPostInput, {
    nullable: false,
  })
  data!: PostFileUpdateWithoutPostInput;
}
