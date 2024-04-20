import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.ObjectType('AccountMaxAggregate', {})
export class AccountMaxAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  type!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  provider!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  providerAccountId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  refresh_token!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  access_token!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  expires_at!: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  token_type!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  scope!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id_token!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  session_state!: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  userId!: number | null;
}
