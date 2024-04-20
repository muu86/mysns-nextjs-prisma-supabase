import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserAddressCreateManyUserInput } from '../inputs/UserAddressCreateManyUserInput';

@TypeGraphQL.InputType('UserAddressCreateManyUserInputEnvelope', {})
export class UserAddressCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [UserAddressCreateManyUserInput], {
    nullable: false,
  })
  data!: UserAddressCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
