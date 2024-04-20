import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../scalars';
import { Post } from '../models/Post';
import { UserAddress } from '../models/UserAddress';
import { AddressCount } from '../resolvers/outputs/AddressCount';

@TypeGraphQL.ObjectType('Address', {})
export class Address {
  @TypeGraphQL.Field((_type) => TypeGraphQL.ID, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  code!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  c1!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  c2?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  c3?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  c4?: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  posts?: Post[];

  users?: UserAddress[];

  @TypeGraphQL.Field((_type) => AddressCount, {
    nullable: true,
  })
  _count?: AddressCount | null;
}
