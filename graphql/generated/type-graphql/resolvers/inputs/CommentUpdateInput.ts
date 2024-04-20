import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { PostUpdateOneRequiredWithoutCommentsNestedInput } from '../inputs/PostUpdateOneRequiredWithoutCommentsNestedInput';
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput';
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from '../inputs/UserUpdateOneRequiredWithoutCommentsNestedInput';

@TypeGraphQL.InputType('CommentUpdateInput', {})
export class CommentUpdateInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateOneRequiredWithoutCommentsNestedInput, {
    nullable: true,
  })
  post?: PostUpdateOneRequiredWithoutCommentsNestedInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutCommentsNestedInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutCommentsNestedInput | undefined;
}
