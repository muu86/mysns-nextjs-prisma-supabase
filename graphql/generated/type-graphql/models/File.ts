import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../scalars';
import { PostFile } from '../models/PostFile';
import { UserFile } from '../models/UserFile';
import { FileStorageType } from '../enums/FileStorageType';
import { FileCount } from '../resolvers/outputs/FileCount';

@TypeGraphQL.ObjectType('File', {})
export class File {
  @TypeGraphQL.Field((_type) => TypeGraphQL.ID, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  location!: string;

  @TypeGraphQL.Field((_type) => FileStorageType, {
    nullable: false,
  })
  type!: 'S3';

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  posts?: PostFile[];

  files?: UserFile[];

  @TypeGraphQL.Field((_type) => FileCount, {
    nullable: true,
  })
  _count?: FileCount | null;
}
