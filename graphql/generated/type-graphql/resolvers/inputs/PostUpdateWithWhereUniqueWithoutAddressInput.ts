import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostUpdateWithoutAddressInput } from '../inputs/PostUpdateWithoutAddressInput';
import { PostWhereUniqueInput } from '../inputs/PostWhereUniqueInput';

@TypeGraphQL.InputType('PostUpdateWithWhereUniqueWithoutAddressInput', {})
export class PostUpdateWithWhereUniqueWithoutAddressInput {
  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostUpdateWithoutAddressInput, {
    nullable: false,
  })
  data!: PostUpdateWithoutAddressInput;
}
