import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../scalars';
import { User } from '../models/User';

@TypeGraphQL.ObjectType('Session', {})
export class Session {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  sessionToken!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  expires!: Date;

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

  user?: User;
}
