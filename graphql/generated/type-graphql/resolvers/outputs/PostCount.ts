import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostCountCommentsArgs } from './args/PostCountCommentsArgs';
import { PostCountFilesArgs } from './args/PostCountFilesArgs';

@TypeGraphQL.ObjectType('PostCount', {})
export class PostCount {
  comments!: number;
  files!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'comments',
    nullable: false,
  })
  getComments(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountCommentsArgs): number {
    return root.comments;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'files',
    nullable: false,
  })
  getFiles(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountFilesArgs): number {
    return root.files;
  }
}
