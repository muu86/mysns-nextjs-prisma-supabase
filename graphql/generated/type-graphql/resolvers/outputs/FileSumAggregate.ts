import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.ObjectType('FileSumAggregate', {})
export class FileSumAggregate {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id!: number | null;
}
