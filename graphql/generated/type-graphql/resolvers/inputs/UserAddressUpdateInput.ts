import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AddressUpdateOneRequiredWithoutUsersNestedInput } from '../inputs/AddressUpdateOneRequiredWithoutUsersNestedInput';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { UserUpdateOneRequiredWithoutAddressesNestedInput } from '../inputs/UserUpdateOneRequiredWithoutAddressesNestedInput';

@TypeGraphQL.InputType('UserAddressUpdateInput', {})
export class UserAddressUpdateInput {
  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => AddressUpdateOneRequiredWithoutUsersNestedInput, {
    nullable: true,
  })
  address?: AddressUpdateOneRequiredWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutAddressesNestedInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutAddressesNestedInput | undefined;
}
