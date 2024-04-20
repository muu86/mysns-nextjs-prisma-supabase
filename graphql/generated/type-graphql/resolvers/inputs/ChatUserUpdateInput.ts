import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUpdateOneRequiredWithoutUsersNestedInput } from '../inputs/ChatUpdateOneRequiredWithoutUsersNestedInput';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { UserUpdateOneRequiredWithoutChatsNestedInput } from '../inputs/UserUpdateOneRequiredWithoutChatsNestedInput';

@TypeGraphQL.InputType('ChatUserUpdateInput', {})
export class ChatUserUpdateInput {
  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => ChatUpdateOneRequiredWithoutUsersNestedInput, {
    nullable: true,
  })
  chat?: ChatUpdateOneRequiredWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutChatsNestedInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutChatsNestedInput | undefined;
}
