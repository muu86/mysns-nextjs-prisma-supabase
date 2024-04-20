import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileUpdateWithoutFileInput } from '../inputs/PostFileUpdateWithoutFileInput';
import { PostFileWhereUniqueInput } from '../inputs/PostFileWhereUniqueInput';

@TypeGraphQL.InputType('PostFileUpdateWithWhereUniqueWithoutFileInput', {})
export class PostFileUpdateWithWhereUniqueWithoutFileInput {
  @TypeGraphQL.Field((_type) => PostFileWhereUniqueInput, {
    nullable: false,
  })
  where!: PostFileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostFileUpdateWithoutFileInput, {
    nullable: false,
  })
  data!: PostFileUpdateWithoutFileInput;
}
