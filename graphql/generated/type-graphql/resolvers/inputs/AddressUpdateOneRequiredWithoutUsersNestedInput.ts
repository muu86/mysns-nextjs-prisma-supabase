import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AddressUpdateToOneWithWhereWithoutUsersInput } from '../inputs/AddressUpdateToOneWithWhereWithoutUsersInput';
import { AddressWhereUniqueInput } from '../inputs/AddressWhereUniqueInput';

@TypeGraphQL.InputType('AddressUpdateOneRequiredWithoutUsersNestedInput', {})
export class AddressUpdateOneRequiredWithoutUsersNestedInput {
  @TypeGraphQL.Field((_type) => AddressWhereUniqueInput, {
    nullable: true,
  })
  connect?: AddressWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => AddressUpdateToOneWithWhereWithoutUsersInput, {
    nullable: true,
  })
  update?: AddressUpdateToOneWithWhereWithoutUsersInput | undefined;
}
