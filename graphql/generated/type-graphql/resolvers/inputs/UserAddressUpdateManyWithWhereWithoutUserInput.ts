import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserAddressScalarWhereInput } from '../inputs/UserAddressScalarWhereInput';
import { UserAddressUpdateManyMutationInput } from '../inputs/UserAddressUpdateManyMutationInput';

@TypeGraphQL.InputType('UserAddressUpdateManyWithWhereWithoutUserInput', {})
export class UserAddressUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field((_type) => UserAddressScalarWhereInput, {
    nullable: false,
  })
  where!: UserAddressScalarWhereInput;

  @TypeGraphQL.Field((_type) => UserAddressUpdateManyMutationInput, {
    nullable: false,
  })
  data!: UserAddressUpdateManyMutationInput;
}
