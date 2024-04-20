import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileCreateManyPostInput } from '../inputs/PostFileCreateManyPostInput';

@TypeGraphQL.InputType('PostFileCreateManyPostInputEnvelope', {})
export class PostFileCreateManyPostInputEnvelope {
  @TypeGraphQL.Field((_type) => [PostFileCreateManyPostInput], {
    nullable: false,
  })
  data!: PostFileCreateManyPostInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
