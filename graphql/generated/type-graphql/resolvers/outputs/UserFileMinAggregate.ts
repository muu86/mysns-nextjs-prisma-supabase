import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.ObjectType('UserFileMinAggregate', {})
export class UserFileMinAggregate {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  userId!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  fileId!: number | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}
