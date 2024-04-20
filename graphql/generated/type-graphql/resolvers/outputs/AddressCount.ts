import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AddressCountPostsArgs } from './args/AddressCountPostsArgs';
import { AddressCountUsersArgs } from './args/AddressCountUsersArgs';

@TypeGraphQL.ObjectType('AddressCount', {})
export class AddressCount {
  posts!: number;
  users!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'posts',
    nullable: false,
  })
  getPosts(@TypeGraphQL.Root() root: AddressCount, @TypeGraphQL.Args() args: AddressCountPostsArgs): number {
    return root.posts;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'users',
    nullable: false,
  })
  getUsers(@TypeGraphQL.Root() root: AddressCount, @TypeGraphQL.Args() args: AddressCountUsersArgs): number {
    return root.users;
  }
}
