import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateNestedOneWithoutSessionsInput } from '../inputs/UserCreateNestedOneWithoutSessionsInput';

@TypeGraphQL.InputType('SessionCreateInput', {})
export class SessionCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  sessionToken!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  expires!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutSessionsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutSessionsInput;
}
