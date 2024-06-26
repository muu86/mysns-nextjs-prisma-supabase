import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { NullableStringFieldUpdateOperationsInput } from '../inputs/NullableStringFieldUpdateOperationsInput';
import { PostUpdateManyWithoutAddressNestedInput } from '../inputs/PostUpdateManyWithoutAddressNestedInput';
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput';

@TypeGraphQL.InputType('AddressUpdateWithoutUsersInput', {})
export class AddressUpdateWithoutUsersInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  code?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  c1?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  c2?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  c3?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  c4?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateManyWithoutAddressNestedInput, {
    nullable: true,
  })
  posts?: PostUpdateManyWithoutAddressNestedInput | undefined;
}
