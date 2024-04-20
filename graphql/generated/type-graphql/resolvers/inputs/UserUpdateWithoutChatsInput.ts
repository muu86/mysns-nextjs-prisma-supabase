import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AccountUpdateManyWithoutUserNestedInput } from '../inputs/AccountUpdateManyWithoutUserNestedInput';
import { ChatMessageUpdateManyWithoutUserNestedInput } from '../inputs/ChatMessageUpdateManyWithoutUserNestedInput';
import { CommentUpdateManyWithoutUserNestedInput } from '../inputs/CommentUpdateManyWithoutUserNestedInput';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { EnumRoleFieldUpdateOperationsInput } from '../inputs/EnumRoleFieldUpdateOperationsInput';
import { NullableDateTimeFieldUpdateOperationsInput } from '../inputs/NullableDateTimeFieldUpdateOperationsInput';
import { NullableStringFieldUpdateOperationsInput } from '../inputs/NullableStringFieldUpdateOperationsInput';
import { PostUpdateManyWithoutUserNestedInput } from '../inputs/PostUpdateManyWithoutUserNestedInput';
import { SessionUpdateManyWithoutUserNestedInput } from '../inputs/SessionUpdateManyWithoutUserNestedInput';
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput';
import { UserAddressUpdateManyWithoutUserNestedInput } from '../inputs/UserAddressUpdateManyWithoutUserNestedInput';
import { UserFileUpdateManyWithoutUserNestedInput } from '../inputs/UserFileUpdateManyWithoutUserNestedInput';

@TypeGraphQL.InputType('UserUpdateWithoutChatsInput', {})
export class UserUpdateWithoutChatsInput {
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

  @TypeGraphQL.Field((_type) => AccountUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  accounts?: AccountUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field((_type) => CommentUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  posts?: PostUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field((_type) => SessionUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  sessions?: SessionUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field((_type) => UserAddressUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  addresses?: UserAddressUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field((_type) => UserFileUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  files?: UserFileUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field((_type) => ChatMessageUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput | undefined;
}
