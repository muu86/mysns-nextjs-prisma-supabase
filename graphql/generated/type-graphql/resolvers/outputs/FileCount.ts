import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { FileCountFilesArgs } from './args/FileCountFilesArgs';
import { FileCountPostsArgs } from './args/FileCountPostsArgs';

@TypeGraphQL.ObjectType('FileCount', {})
export class FileCount {
  posts!: number;
  files!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'posts',
    nullable: false,
  })
  getPosts(@TypeGraphQL.Root() root: FileCount, @TypeGraphQL.Args() args: FileCountPostsArgs): number {
    return root.posts;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'files',
    nullable: false,
  })
  getFiles(@TypeGraphQL.Root() root: FileCount, @TypeGraphQL.Args() args: FileCountFilesArgs): number {
    return root.files;
  }
}
