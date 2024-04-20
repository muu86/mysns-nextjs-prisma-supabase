import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUpdateOneRequiredWithoutMessagesNestedInput } from '../inputs/ChatUpdateOneRequiredWithoutMessagesNestedInput';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput';
import { UserUpdateOneRequiredWithoutChatMessagesNestedInput } from '../inputs/UserUpdateOneRequiredWithoutChatMessagesNestedInput';

@TypeGraphQL.InputType('ChatMessageUpdateInput', {})
export class ChatMessageUpdateInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  message?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutChatMessagesNestedInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutChatMessagesNestedInput | undefined;

  @TypeGraphQL.Field((_type) => ChatUpdateOneRequiredWithoutMessagesNestedInput, {
    nullable: true,
  })
  chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput | undefined;
}
