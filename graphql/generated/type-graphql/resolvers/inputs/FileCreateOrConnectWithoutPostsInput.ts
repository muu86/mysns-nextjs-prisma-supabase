import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { FileCreateWithoutPostsInput } from '../inputs/FileCreateWithoutPostsInput';
import { FileWhereUniqueInput } from '../inputs/FileWhereUniqueInput';

@TypeGraphQL.InputType('FileCreateOrConnectWithoutPostsInput', {})
export class FileCreateOrConnectWithoutPostsInput {
  @TypeGraphQL.Field((_type) => FileWhereUniqueInput, {
    nullable: false,
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => FileCreateWithoutPostsInput, {
    nullable: false,
  })
  create!: FileCreateWithoutPostsInput;
}
