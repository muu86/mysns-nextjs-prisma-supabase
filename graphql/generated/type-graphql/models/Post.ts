import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../scalars';
import { Address } from '../models/Address';
import { Comment } from '../models/Comment';
import { PostFile } from '../models/PostFile';
import { User } from '../models/User';
import { PostCount } from '../resolvers/outputs/PostCount';

@TypeGraphQL.ObjectType('Post', {})
export class Post {
  @TypeGraphQL.Field((_type) => TypeGraphQL.ID, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  content!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  addressId!: number;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  userId!: number;

  comments?: Comment[];

  files?: PostFile[];

  address?: Address;

  user?: User;

  @TypeGraphQL.Field((_type) => PostCount, {
    nullable: true,
  })
  _count?: PostCount | null;
}
