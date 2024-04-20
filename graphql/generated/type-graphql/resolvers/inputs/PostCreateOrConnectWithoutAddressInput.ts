import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostCreateWithoutAddressInput } from '../inputs/PostCreateWithoutAddressInput';
import { PostWhereUniqueInput } from '../inputs/PostWhereUniqueInput';

@TypeGraphQL.InputType('PostCreateOrConnectWithoutAddressInput', {})
export class PostCreateOrConnectWithoutAddressInput {
  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutAddressInput, {
    nullable: false,
  })
  create!: PostCreateWithoutAddressInput;
}
