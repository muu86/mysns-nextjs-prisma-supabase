import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { EnumRoleFieldUpdateOperationsInput } from '../inputs/EnumRoleFieldUpdateOperationsInput';
import { NullableDateTimeFieldUpdateOperationsInput } from '../inputs/NullableDateTimeFieldUpdateOperationsInput';
import { NullableStringFieldUpdateOperationsInput } from '../inputs/NullableStringFieldUpdateOperationsInput';
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput';

@TypeGraphQL.InputType('UserUpdateManyMutationInput', {})
export class UserUpdateManyMutationInput {
  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  content?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  babyBirth?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  username?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => EnumRoleFieldUpdateOperationsInput, {
    nullable: true,
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;
}