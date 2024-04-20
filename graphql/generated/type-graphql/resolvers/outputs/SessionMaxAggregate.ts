import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.ObjectType('SessionMaxAggregate', {})
export class SessionMaxAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  sessionToken!: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  expires!: Date | null;

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
