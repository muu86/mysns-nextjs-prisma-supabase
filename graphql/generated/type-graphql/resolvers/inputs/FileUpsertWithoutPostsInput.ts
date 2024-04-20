import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { FileCreateWithoutPostsInput } from '../inputs/FileCreateWithoutPostsInput';
import { FileUpdateWithoutPostsInput } from '../inputs/FileUpdateWithoutPostsInput';
import { FileWhereInput } from '../inputs/FileWhereInput';

@TypeGraphQL.InputType('FileUpsertWithoutPostsInput', {})
export class FileUpsertWithoutPostsInput {
  @TypeGraphQL.Field((_type) => FileUpdateWithoutPostsInput, {
    nullable: false,
  })
  update!: FileUpdateWithoutPostsInput;

  @TypeGraphQL.Field((_type) => FileCreateWithoutPostsInput, {
    nullable: false,
  })
  create!: FileCreateWithoutPostsInput;

  @TypeGraphQL.Field((_type) => FileWhereInput, {
    nullable: true,
  })
  where?: FileWhereInput | undefined;
}
