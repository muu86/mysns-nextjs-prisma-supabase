import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { FileUpdateWithoutPostsInput } from '../inputs/FileUpdateWithoutPostsInput';
import { FileWhereInput } from '../inputs/FileWhereInput';

@TypeGraphQL.InputType('FileUpdateToOneWithWhereWithoutPostsInput', {})
export class FileUpdateToOneWithWhereWithoutPostsInput {
  @TypeGraphQL.Field((_type) => FileWhereInput, {
    nullable: true,
  })
  where?: FileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => FileUpdateWithoutPostsInput, {
    nullable: false,
  })
  data!: FileUpdateWithoutPostsInput;
}
