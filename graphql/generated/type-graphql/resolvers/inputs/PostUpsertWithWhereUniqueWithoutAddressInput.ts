import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostCreateWithoutAddressInput } from '../inputs/PostCreateWithoutAddressInput';
import { PostUpdateWithoutAddressInput } from '../inputs/PostUpdateWithoutAddressInput';
import { PostWhereUniqueInput } from '../inputs/PostWhereUniqueInput';

@TypeGraphQL.InputType('PostUpsertWithWhereUniqueWithoutAddressInput', {})
export class PostUpsertWithWhereUniqueWithoutAddressInput {
  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostUpdateWithoutAddressInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutAddressInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutAddressInput, {
    nullable: false,
  })
  create!: PostCreateWithoutAddressInput;
}
