import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AddressUpdateWithoutUsersInput } from '../inputs/AddressUpdateWithoutUsersInput';
import { AddressWhereInput } from '../inputs/AddressWhereInput';

@TypeGraphQL.InputType('AddressUpdateToOneWithWhereWithoutUsersInput', {})
export class AddressUpdateToOneWithWhereWithoutUsersInput {
  @TypeGraphQL.Field((_type) => AddressWhereInput, {
    nullable: true,
  })
  where?: AddressWhereInput | undefined;

  @TypeGraphQL.Field((_type) => AddressUpdateWithoutUsersInput, {
    nullable: false,
  })
  data!: AddressUpdateWithoutUsersInput;
}
