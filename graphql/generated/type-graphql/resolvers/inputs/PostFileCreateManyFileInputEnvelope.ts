import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileCreateManyFileInput } from '../inputs/PostFileCreateManyFileInput';

@TypeGraphQL.InputType('PostFileCreateManyFileInputEnvelope', {})
export class PostFileCreateManyFileInputEnvelope {
  @TypeGraphQL.Field((_type) => [PostFileCreateManyFileInput], {
    nullable: false,
  })
  data!: PostFileCreateManyFileInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
