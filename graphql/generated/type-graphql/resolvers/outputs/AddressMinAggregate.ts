import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.ObjectType('AddressMinAggregate', {})
export class AddressMinAggregate {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id!: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  code!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  c1!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  c2!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  c3!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  c4!: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}
