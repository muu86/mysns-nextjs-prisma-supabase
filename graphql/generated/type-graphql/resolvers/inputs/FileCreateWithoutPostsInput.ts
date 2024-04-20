import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileCreateNestedManyWithoutFileInput } from '../inputs/UserFileCreateNestedManyWithoutFileInput';
import { FileStorageType } from '../../enums/FileStorageType';

@TypeGraphQL.InputType('FileCreateWithoutPostsInput', {})
export class FileCreateWithoutPostsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  location!: string;

  @TypeGraphQL.Field((_type) => FileStorageType, {
    nullable: true,
  })
  type?: 'S3' | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => UserFileCreateNestedManyWithoutFileInput, {
    nullable: true,
  })
  files?: UserFileCreateNestedManyWithoutFileInput | undefined;
}
