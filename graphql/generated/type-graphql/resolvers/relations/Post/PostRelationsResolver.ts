import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { Address } from '../../../models/Address';
import { Comment } from '../../../models/Comment';
import { Post } from '../../../models/Post';
import { PostFile } from '../../../models/PostFile';
import { User } from '../../../models/User';
import { PostCommentsArgs } from './args/PostCommentsArgs';
import { PostFilesArgs } from './args/PostFilesArgs';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Comment], {
    nullable: false,
  })
  async comments(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostCommentsArgs
  ): Promise<Comment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .comments({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [PostFile], {
    nullable: false,
  })
  async files(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostFilesArgs
  ): Promise<PostFile[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .files({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => Address, {
    nullable: false,
  })
  async address(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo
  ): Promise<Address> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .address({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo
  ): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .user({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
