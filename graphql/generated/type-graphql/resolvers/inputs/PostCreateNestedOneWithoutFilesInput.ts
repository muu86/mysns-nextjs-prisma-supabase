import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostCreateOrConnectWithoutFilesInput } from '../inputs/PostCreateOrConnectWithoutFilesInput';
import { PostCreateWithoutFilesInput } from '../inputs/PostCreateWithoutFilesInput';
import { PostWhereUniqueInput } from '../inputs/PostWhereUniqueInput';

@TypeGraphQL.InputType('PostCreateNestedOneWithoutFilesInput', {})
export class PostCreateNestedOneWithoutFilesInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutFilesInput, {
    nullable: true,
  })
  create?: PostCreateWithoutFilesInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutFilesInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutFilesInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;
}
