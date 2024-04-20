import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUpdateOneRequiredWithoutUsersNestedInput } from '../inputs/ChatUpdateOneRequiredWithoutUsersNestedInput';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';

@TypeGraphQL.InputType('ChatUserUpdateWithoutUserInput', {})
export class ChatUserUpdateWithoutUserInput {
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
}
